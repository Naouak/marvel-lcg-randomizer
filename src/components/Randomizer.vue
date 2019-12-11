<template>
    <div>
        <img src="../assets/logo.jpg" alt="Marvel Champions" class="logo">
        <h1 class="title">Scenario Randomizer</h1>

        <button class="randomize" @click="randomize">New Scenario</button>

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

                const numberOfModules = scenario.minModules !== undefined ? scenario.minModules : 1;

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
    button{
        font-size: 3vmax;
        margin: 30px;
        padding: 20px;
    }

    .title{
        font-size: 3vmax;
    }

    img.logo{
        height: 100px;
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
