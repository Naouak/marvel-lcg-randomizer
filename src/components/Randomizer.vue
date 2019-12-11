<template>
    <div>
        <h1 class="title">Marvel Champions Scenario Randomizer</h1>

        <img :src="scenarios[selectedScenario].img" :alt="scenarios[selectedScenario].name">
        <img v-bind:key="index" v-for="(mod, index) in selectedModules" :src="modules[mod].img" :alt="modules[mod].name"/>

        <div class="randomized-scenario">
            <span class="scenario">
                {{scenarios[selectedScenario].name}} ({{scenarios[selectedScenario].pack}})
            </span>
            with
            <span class="modules">
                <span v-bind:key="index" v-for="(mod, index) in selectedModules">
                    {{modules[mod].name}}({{modules[mod].pack}})<span v-if="index < selectedModules.length-1">,</span>
                </span>
            </span>
            on
            <span class="difficulty">
                {{selectedDifficulty}}
            </span>
            difficulty
        </div>

        <button class="randomize" @click="randomize">New Scenario</button>
    </div>
</template>

<script>
    export default {
        name: "Randomizer.vue",
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

                const numberOfModules = scenario.minModules || 1;

                this.selectedModules = Array.from({length: numberOfModules}, () => Math.floor(Math.random() * this.scenarios.length));
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
    .randomized-scenario{
        font-size: 7vmax;
    }

    .title{
        font-size: 3vmax;
    }
    /*.scenario {*/
    /*    font-size: 10vmax;*/
    /*}*/

    /*.modules {*/
    /*    padding: 0;*/
    /*}*/

    /*.modules li {*/
    /*    margin: 0;*/
    /*    padding: 0;*/
    /*    list-style: none;*/
    /*    font-size: 10vmax;*/
    /*}*/

    /*.difficulty {*/
    /*    font-size: 10vmax;*/
    /*}*/

    /*.randomize {*/
    /*    margin: 5vmax;*/
    /*    font-size: 5vmax;*/
    /*}*/
</style>
