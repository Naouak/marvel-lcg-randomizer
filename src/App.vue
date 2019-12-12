<template>
    <div id="app">
        <h1>
            <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo">
        </h1>

        <button class="randomize-button" @click="randomize">Randomize</button>
        <PlayerSelector v-model="numberOfPlayer"/>

        <hr>
        <ScenarioRandomizer ref="scenarioRandomizer" :scenarios="data.scenarios" :modules="data.modules"/>
        <hr>
        <HeroRandomizer ref="heroRandomizer" :heroes="data.heroes" :aspects="data.aspects" :number-of-player="numberOfPlayer"/>
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

    export default {
        name: 'app',
        data: () => ({
            data: {
                scenarios,
                modules,
                heroes,
                aspects,
            },
            numberOfPlayer: 1
        }),
        methods: {
            randomize(){
                this.$refs.scenarioRandomizer.randomize();
                this.$refs.heroRandomizer.randomize();
            }
        },
        components: {
            PlayerSelector,
            HeroRandomizer,
            ScenarioRandomizer,
        }
    }
</script>

<style>

    #app {
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
