import {shuffleArray} from "@/helpers";

export default class Randomizer {

    randomizeScenario(scenarios, availableModules, defaultDifficulties, {additionalModules = 0, limitToScenarios: limitToScenarios = "" } = { additionalModules: 0}, playerCount = 1){
        const availableScenarios = limitToScenarios.length > 0 ? limitToScenarios : scenarios;
        const scenario = shuffleArray(availableScenarios).shift();
        const encounterDecks = scenario?.decks || [{}];

        encounterDecks[0].name = encounterDecks[0].name || "encounter deck";

        const shuffledModules = shuffleArray(availableModules);
        const modules = encounterDecks.map((deck) => {
            let requiredModules = [];
            if (deck.requiredModules && deck.requiredModules.length > 0) {
                requiredModules = deck.requiredModules.map((module) => {
                    const modObject = shuffledModules.find((modToTest) => {
                        return modToTest.name === module;
                    });
                    if(modObject){
                        shuffledModules.splice(shuffledModules.indexOf(modObject), 1);
                        return {...modObject, required: true};
                    }
                    return null;
                }).filter(mod => !!mod);
            }

            const numberOfModules =
                this.getNumberOfModules(deck, additionalModules, playerCount);

            let selectedModules = [];
            // Skipped modules during selection (to put them back in the pool if another deck needs to be generated for this scenario)
            const unselectedModules = [];
            while(selectedModules.length < numberOfModules && shuffledModules.length > 0){
                const currentModule = shuffledModules.shift();

                // Module needs to be from a specific type (e.g. Thunderbolts modules)
                if(deck?.moduleRequirements?.type){
                    if ((currentModule.types || []).indexOf(deck?.moduleRequirements?.type) < 0) {
                        unselectedModules.push(currentModule);
                        continue;
                    }
                }
                // Is the module usable for the random modules?
                // Note: We don't skip non randomizable modules when a type of module is specified in the deck (workaround for pvp leaders)
                else if(currentModule.randomize === false){
                    unselectedModules.push(currentModule);
                    continue;
                }

                // Skip modules that are not respecting generation rules (e.g. Mojo scenarios)
                // Module needs to be from a specific pack (e.g. Mojo Scenario Pack)
                if(deck?.moduleRequirements?.pack && currentModule.pack !== deck?.moduleRequirements?.pack){
                    unselectedModules.push(currentModule);
                    continue;
                }

                // Module can't be from a given type (e.g. PVP modules, Registration vs Resistance)
                if(deck?.moduleRequirements?.excludedTypes && currentModule.types){
                    const shouldRemove = deck?.moduleRequirements?.excludedTypes.reduce((shouldRemove, type) => {
                        return shouldRemove || currentModule.types.indexOf(type) >= 0;
                    }, false);

                    if(shouldRemove){
                        unselectedModules.push(currentModule);
                        continue;
                    }
                }

                selectedModules.push(currentModule);
            }

            // Put back modules that were skipped
            shuffledModules.push(...unselectedModules);

            return {deck, modules: [...requiredModules, ...selectedModules]};
        });

        const scenarioDifficulties = (scenario?.difficulties || [])
            // Select custom difficulties only by selected difficulties
            .filter(([diff,]) => (defaultDifficulties.indexOf(diff.toLowerCase()) >= 0))
            .map(([,d]) => d);

        const difficulties =  scenarioDifficulties.length? scenarioDifficulties:defaultDifficulties;
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)] || "No difficulty available";

        return {
            scenario,
            modules,
            difficulty,
        };
    }

    getNumberOfModules(deck, additionalModules, playerCount) {
        const minModules = deck.minModules !== undefined ? deck.minModules : 1;
        const maxModules = deck.maxModules !== undefined ? deck.maxModules : minModules;
        const moduleCount = Math.round(Math.random() * (maxModules - minModules)) + minModules;

        return moduleCount
            + additionalModules
            + (deck.additionalModulesPerPlayer !== undefined ? deck.additionalModulesPerPlayer * playerCount : 0);
    }

    generateAspects(availableAspects) {
        const aspects = shuffleArray(availableAspects);
        aspects.push(...shuffleArray(availableAspects));
        // Prevents two of the same aspect in a row
        for(let i = 0; i < aspects.length - 2; i++){
            if(aspects[i] === aspects[i+1]){
                [aspects[i+1], aspects[i+2]] = [aspects[i+2], aspects[i+1]];
            }
        }
        return aspects;
    }

    randomizeHeroes(availableHeroes, availableAspects){
        const heroes = shuffleArray(availableHeroes);
        let aspects = this.generateAspects(availableAspects)

        const selectedHeroes = [];

        for(let i = 0; i < Math.min(4, heroes.length); i++){
            const currentAspects = [];
            const numberOfAspects = heroes[i].numberOfAspects || 1;

            if (aspects.length < numberOfAspects) {
                aspects = this.generateAspects(availableAspects);
            }

            for(let j = 0; j < numberOfAspects; j++){
                currentAspects.push(aspects.shift());
            }

            selectedHeroes.push({
                hero: heroes[i],
                aspects: currentAspects,
            });
        }
        return selectedHeroes;
    }
}
