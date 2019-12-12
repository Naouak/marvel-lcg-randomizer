<template>
    <div class="scenario-randomizer">
        <h1 class="title" @click="shown=!shown">Scenario Randomizer</h1>
        <div class="content" v-if="shown">
            <div class="random-scenario">
                <div>
                    <img :src="scenarios[selectedScenario].img" :alt="scenarios[selectedScenario].name">
                    <div>
                        {{scenarios[selectedScenario].name}}({{scenarios[selectedScenario].pack}})
                    </div>
                </div>
                <div v-bind:key="index" v-for="(mod, index) in selectedModules">
                    <img :src="modules[mod].img" :alt="modules[mod].name"/>
                    <div>
                        {{modules[mod].name}}({{modules[mod].pack}})
                    </div>
                </div>
            </div>
            <div class="difficulty">
                Difficulty:
                <span class="difficulty-value">
                    {{selectedDifficulty}}
                </span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ScenarioRandomizer.vue",
        props: {
            scenarios: {
                default: [],
            },
            modules: {
                default: [],
            },
            difficulties: {
                default: () => ["Standard", "Expert"],
            }
        },
        data() {
            return {
                selectedScenario: 0,
                selectedModules: [0],
                selectedDifficulty: "Standard",
                shown: true,
            };
        },
        created() {
            this.randomize();
        },
        methods: {
            randomize() {
                this.selectedScenario = Math.floor(Math.random() * this.scenarios.length);
                const scenario = this.scenarios[this.selectedScenario];
                const difficulties = scenario.difficulties || this.difficulties;

                const numberOfModules = scenario.minModules !== undefined ? scenario.minModules : 1;

                this.selectedModules = Array.from({length: numberOfModules}, () => Math.floor(Math.random() * this.modules.length));
                this.selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
            },
        },
        watch: {
            scenarios() {
                this.randomize();
            },
            modules() {
                this.randomize();
            }

        }
    }
</script>

<style scoped>
    .scenario-randomizer{
        margin-top: 30px;
    }

    h1{
        margin: 0;
    }

    button{
        font-size: 3vmax;
        margin: 30px;
        padding: 20px;
    }

    .title{
        font-size: 3vmax;
    }

    .random-scenario img{
        box-sizing: border-box;
        width: 100%;
        max-width: 500px;
        padding: 0 10px;
    }

    .random-scenario{
        display: flex;
        justify-content: center;
    }

    .random-scenario > div{
        margin: 20px 0;
        display: inline-block;
    }

    .difficulty{
        font-size: 3vmax;
    }

    .difficulty-value{
        font-weight: bold;
    }
</style>
