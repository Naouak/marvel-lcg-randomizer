<template>
    <div class="app">
        <h1>
            <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo">
        </h1>

        <button class="randomize-button" @click="randomize">Randomize</button>
        <PlayerSelector v-model="numberOfPlayer"/>

        <PackSelector :packs="data.packs" v-model="selectedPacks" />

        <hr>
        <ScenarioRandomizer ref="scenarioRandomizer" :scenarios="availableScenarios" :modules="availableModules"/>
        <hr>
        <HeroRandomizer ref="heroRandomizer" :heroes="availableHeroes" :aspects="data.aspects" :number-of-player="numberOfPlayer"/>
        <hr>
        <Changelog/>
    </div>
</template>

<script>
    import ScenarioRandomizer from './components/ScenarioRandomizer';
    import {scenarios} from './data/scenarios';
    import {modules} from './data/modules';
    import {heroes} from './data/heroes';
    import {aspects} from "@/data/aspects";
    import HeroRandomizer from "@/components/HeroRandomizer";
    import PlayerSelector from "@/components/PlayerSelector";
    import PackSelector from "@/components/PackSelector";
    import Changelog from "@/components/Changelog";

    const dataStorage = window.localStorage;

    const packs = {
        Heroes: heroes.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
        Scenarios: scenarios.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
        Modules: modules.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
    };

    let selectedPacks = null;
    try{
        selectedPacks = JSON.parse(dataStorage.getItem("selectedPacks")) || ["Core Set"];
    } catch {
        selectedPacks = ["Core Set"];
        dataStorage.removeItem("selectedPacks");
    }

    export default {
        name: 'app',
        data: () => ({
            data: {
                scenarios,
                modules,
                heroes,
                aspects,
                packs,
            },
            selectedPacks: selectedPacks,
            numberOfPlayer: 1
        }),
        watch: {
          selectedPacks(){
              dataStorage.setItem("selectedPacks", JSON.stringify(this.selectedPacks));
          },
        },
        computed: {
            availableScenarios() {
                return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.pack)>=0);
            },
            availableModules() {
                return this.data.modules.filter(s => this.selectedPacks.indexOf(s.pack)>=0);
            },
            availableHeroes() {
                return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.pack)>=0);
            },
        },
        methods: {
            randomize(){
                this.$refs.scenarioRandomizer.randomize();
                this.$refs.heroRandomizer.randomize();
            }
        },
        components: {
            Changelog,
            PackSelector,
            PlayerSelector,
            HeroRandomizer,
            ScenarioRandomizer,
        }
    }
</script>

<style>

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    img.logo {
        height: 100px;
    }

    .randomize-button{
        font-size: 3vmax;
        padding: 10px;
        margin: 10px;
    }

</style>
