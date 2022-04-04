import {shuffleArray} from "@/helpers";

export default class Randomizer {
    randomizeScenario(scenarios, availableModules, defaultDifficulties, {additionalModules = 0 } = { additionalModules: 0}){
        const scenario = shuffleArray(scenarios).shift();
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

            const numberOfModules = (deck.minModules !== undefined ? deck.minModules : 1 ) + additionalModules;

            let selectedModules = [];

            while(selectedModules.length < numberOfModules && shuffledModules.length > 0){
                if(shuffledModules[0].randomize !== false){
                    selectedModules.push(shuffledModules[0]);
                }
                shuffledModules.splice(0,1);
            }

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
