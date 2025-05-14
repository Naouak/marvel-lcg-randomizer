import {shuffleArray} from "@/helpers";
import { starRatingDifficultyRange } from "@/data/starRatingDifficultyRange.js";

export default class Randomizer {
    randomizeScenario(scenarios, availableModules, defaultDifficulties, {additionalModules = 0, limitToScenarios: limitToScenarios = "", useStarRating = false, starRatingRange = starRatingDifficultyRange[2] } = { additionalModules: 0 }, playerCount = 1) {
        let availableScenarios = limitToScenarios.length > 0 ? limitToScenarios : scenarios;
        let starDifficultyFailure = false;
        if (useStarRating) {
            //Limit available scenarios to those that can be made to fall into range of starRatingRange
            const starRatingFilteredScenarios = availableScenarios.filter(scenario => {
                let unusedModules = [...availableModules];
                unusedModules.sort((a, b) => a.starRating - b.starRating);
                let scenarioStarRating = playerCount == 1 ? scenario.starRating.solo : scenario.starRating.multiplayer;
                let nonReqModuleCount = additionalModules;
                if (scenario.decks) {
                    // Add all required Modules to the Scenario Star Rating
                    scenario.decks.forEach(deck => {
                        if (deck.requiredModules) {
                            deck.requiredModules.forEach(moduleName => {
                                let mi = unusedModules.findIndex(m => m.name === moduleName);
                                if (mi > -1) {
                                    scenarioStarRating += unusedModules[mi].starRating;
                                    unusedModules.splice(mi, 1);
                                }
                            });
                        }
                        nonReqModuleCount += deck.minModules == undefined ? 1 : deck.minModules;
                    });
                } else {
                    nonReqModuleCount += 1;
                }
                // Determine the min and max possible star rating based on the total number of modules
                const scenarioRatingRange = [
                    scenarioStarRating + unusedModules.reduce((sum, mod, index) => sum + (index < nonReqModuleCount ? mod.starRating : 0), 0),
                    scenarioStarRating + unusedModules.reduce((sum, mod, index) => sum + (unusedModules.length - 1 - index < nonReqModuleCount ? mod.starRating : 0), 0)
                ];
                
                return scenarioRatingRange[0] <= starRatingRange[1] && starRatingRange[0] <= scenarioRatingRange[1]
            })
            if(starRatingFilteredScenarios.length > 0) {
                availableScenarios = starRatingFilteredScenarios;
            } else {
                starDifficultyFailure = true;
            }
        }

        const scenario = shuffleArray(availableScenarios).shift();
        let currentStarDifficulty = playerCount == 1 ? scenario.starRating.solo : scenario.starRating.multiplayer;
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
                        currentStarDifficulty += modObject.starRating;
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

                // Module needs to be from a specific type (e.g. Thunderbolts modules)
                if (deck?.moduleRequirements?.type && (currentModule.types || []).indexOf(deck?.moduleRequirements?.type) < 0) {
                    unselectedModules.push(currentModule);
                    continue;
                }

                // Module can't modify the difficulty beyond the remaining modules ability to correct the star difficulty
                if(useStarRating && !starDifficultyFailure) {
                    // Make sure at least 1 remaining module can put us into the target range.
                    const tempStarDifficulty = currentModule.starRating + currentStarDifficulty;
                    const sortedModules = [...shuffledModules]
                    sortedModules.sort((a, b) => a.starRating - b.starRating);
                    const remainingModuleCount = numberOfModules - selectedModules.length - 1;
                    const remainingModuleRatingRange = [
                        tempStarDifficulty + sortedModules.reduce((sum, mod, index) => sum + (index < remainingModuleCount ? mod.starRating : 0), 0),
                        tempStarDifficulty + sortedModules.reduce((sum, mod, index) => sum + (sortedModules.length - 1 - index < remainingModuleCount ? mod.starRating : 0), 0)
                    ];

                    if(!(remainingModuleRatingRange[0] <= starRatingRange[1] && starRatingRange[0] <= remainingModuleRatingRange[1])) {
                        continue;
                    }
                    
                }
                currentStarDifficulty += currentModule.starRating;
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
        const starRatingDifficulty = starDifficultyFailure ? "Not available for selected Modules & Scenarios" : currentStarDifficulty
        return {
            scenario,
            modules,
            difficulty,
            useStarRating,
            starRatingDifficulty,
        };
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
