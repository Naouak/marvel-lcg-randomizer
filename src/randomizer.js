import {shuffleArray} from "@/helpers";

export default class Randomizer {
    randomizeScenario(scenarios, availableModules, defaultDifficulties, {additionalModules = 0, limitToScenarios: limitToScenarios = "" } = { additionalModules: 0}, playerCount = 1){
        const availableScenarios = limitToScenarios.length > 0 ? limitToScenarios : scenarios;
        const scenario = shuffleArray(availableScenarios).shift();
        const encounterDecks = scenario.decks || [{}];

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
                (deck.minModules !== undefined ? deck.minModules : 1 )
                + additionalModules
                + (deck.additionalModulesPerPlayer !== undefined ? deck.additionalModulesPerPlayer * playerCount : 0);

            let selectedModules = [];
            // Skipped modules during selection (to put them back in the pool if another deck needs to be generated for this scenario)
            const unselectedModules = [];
            while(selectedModules.length < numberOfModules && shuffledModules.length > 0){
                const currentModule = shuffledModules.shift();

                // Is the module usable for the random modules?
                if(currentModule.randomize === false){
                    unselectedModules.push(currentModule);
                    continue;
                }

                // Skip modules that are not respecting generation rules (e.g. Mojo scenarios)
                // Module needs to be from a specific pack (e.g. Mojo Scenario Pack)
                if(deck?.moduleRequirements?.pack && currentModule.pack !== deck?.moduleRequirements?.pack){
                    unselectedModules.push(currentModule);
                    continue;
                }

                selectedModules.push(currentModule);
            }

            // Put back modules that were skipped
            shuffledModules.push(...unselectedModules);

            return {deck, modules: [...requiredModules, ...selectedModules]};
        });

        const scenarioDifficulties = (scenario.difficulties || [])
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

    randomizeHeroes(availableHeroes, availableAspects){
        const heroes = shuffleArray(availableHeroes);
        const aspects = shuffleArray(availableAspects);
        aspects.push(...shuffleArray(availableAspects));
        // Prevents two of the same aspect in a row
        for(let i = 0; i < aspects.length - 2; i++){
            if(aspects[i] === aspects[i+1]){
                [aspects[i+1], aspects[i+2]] = [aspects[i+2], aspects[i+1]];
            }
        }

        const selectedHeroes = [];

        for(let i = 0; i < Math.min(4, heroes.length); i++){
            const currentAspects = [];
            const numberOfAspects = heroes[i].numberOfAspects || 1;

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
