import {shuffleArray} from "@/helpers";

export default class Randomizer {
    randomizeScenario(scenarios, availableModules, defaultDifficulties){
        const scenario = shuffleArray(scenarios).shift();

        const numberOfModules = scenario.minModules !== undefined ? scenario.minModules : 1;
        const modules = shuffleArray(availableModules).slice(0,numberOfModules);

        const difficulties = scenario.difficulties || defaultDifficulties;
        const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];

        return {
            scenario,
            modules,
            difficulty,
        };
    }

    randomizeHeroes(availableHeroes, availableAspects){
        const heroes = shuffleArray(availableHeroes);
        const aspects = shuffleArray(availableAspects);
        return Array.from({length: Math.min(4, heroes.length)}, (n, i) => ({hero: heroes[i], aspect: aspects[i]}));
    }
}
