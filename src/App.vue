<template>
  <div class="app">
    <UpdateNotification v-if="appStatus.updated"></UpdateNotification>
    <h1>
      <img src="./assets/logo.jpg" alt="Marvel Champions" class="logo">
    </h1>

    <button class="randomize-button" @click="randomize">Randomize</button>

    <div class="columns">
      <div class="column">
        <PlayerSelector v-model="numberOfPlayer"/>
        <PackSelector :packs="data.packs" v-model="selectedPacks"/>
        <ScenarioSelector :available-scenarios="availableScenarios" v-model="randomizationOptions.limitToScenarios" />
        <DifficultySelector :difficulties="data.difficulties" v-model="randomizationOptions.selectedDifficulties"/>
        <RandomizationOptions v-model="randomizationOptions"/>
      </div>
      <div class="column">
        <ScenarioDisplay v-if="randomizationOptions.scenario" :scenario="selectedScenario"
                         @randomize="randomizeScenario"/>
      </div>
      <div class="column">
        <DeckList v-if="randomizationOptions.decks" :available-decks="selectedDecks"
                  :number-of-player="numberOfPlayer" @randomize="randomizeDecks"/>
      </div>
    </div>


    <ChangeLog/>
    <ContributeText/>
  </div>
</template>

<script>
import {scenarios} from './data/scenarios';
import {modules} from './data/modules';
import {heroes} from './data/heroes';
import {aspects} from "@/data/aspects";
import PlayerSelector from "@/components/PlayerSelector";
import RandomizationOptions from "@/components/RandomizationOptions";
import PackSelector from "@/components/PackSelector";
import ScenarioDisplay from './components/ScenarioDisplay.vue';
import ScenarioSelector from './components/ScenarioSelector.vue';
import DeckList from "@/components/DeckList";
import ChangeLog from "@/components/ChangeLog.vue";
import Randomizer from "@/randomizer";
import ContributeText from "./components/ContributeText.vue";
import DifficultySelector from "./components/DifficultySelector";
import UpdateNotification from "@/components/UpdateNotification.vue";

const difficulties = ["standard", "expert", "nightmare", "standard II", "expert II"];

const dataStorage = window.localStorage;

const packs = {
  Heroes: heroes.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
  Scenarios: scenarios.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
  Modules: modules.map(a => a.pack).filter((a, i, arr) => arr.indexOf(a) === i),
};

const randomizer = new Randomizer();

let selectedPacks = null;
try {
  selectedPacks = JSON.parse(dataStorage.getItem("selectedPacks")) || ["Core Set"];
} catch {
  selectedPacks = ["Core Set"];
  dataStorage.removeItem("selectedPacks");
}

let selectedDifficulties = null;
try {
  selectedDifficulties = JSON.parse(dataStorage.getItem("selectedDifficulties")) || ["standard", "expert"];
} catch {
  selectedDifficulties = ["standard", "expert"];
  dataStorage.removeItem("selectedDifficulties");
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
      difficulties,
    },
    selectedPacks,
    selectedScenario: null,
    selectedDecks: [],
    numberOfPlayer: 1,
    randomizationOptions: {
      scenario: 1,
      decks: 1,
      selectedDifficulties,
      limitToScenarios: [],
    },
    appStatus: {updated: false},
  }),
  watch: {
    selectedPacks() {
      dataStorage.setItem("selectedPacks", JSON.stringify(this.selectedPacks));
      this.randomize();
    },
    randomizationOptions: {
      handler() {
        dataStorage.setItem("selectedDifficulties", JSON.stringify(this.randomizationOptions.selectedDifficulties));
        this.randomize();
      },
      deep: true,
    }
  },
  created() {
    this.randomize();
  },
  computed: {
    availableScenarios() {
      return this.data.scenarios.filter(s => this.selectedPacks.indexOf(s.pack) >= 0);
    },
    availableModules() {
      return this.data.modules.filter(s => this.selectedPacks.indexOf(s.pack) >= 0);
    },
    availableHeroes() {
      return this.data.heroes.filter(s => this.selectedPacks.indexOf(s.pack) >= 0);
    },
    availableDifficulties() {
      return this.data.difficulties.filter(s => this.randomizationOptions.selectedDifficulties.indexOf(s) >= 0);
    },
  },
  methods: {
    randomize() {
      this.randomizeScenario();
      this.randomizeDecks();
    },
    randomizeScenario() {
      this.selectedScenario = randomizer.randomizeScenario(
          this.availableScenarios,
          this.availableModules,
          this.availableDifficulties,
          this.randomizationOptions,
          this.numberOfPlayer
      );
    },
    randomizeDecks() {
      this.selectedDecks = randomizer.randomizeHeroes(this.availableHeroes, this.data.aspects);

    }
  },
  components: {
    UpdateNotification,
    DifficultySelector,
    ContributeText,
    ChangeLog,
    PackSelector,
    PlayerSelector,
    DeckList,
    ScenarioDisplay,
    ScenarioSelector,
    RandomizationOptions,
  }
}
</script>

<style>
@font-face {
  font-family: 'FTY SPEEDY CASUAL NCV';
  src: url('./assets/fonts/FTYSPEEDYCASUALNCV.woff2') format('woff2'),
  url('./assets/fonts/FTYSPEEDYCASUALNCV.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'FTY SPEEDY CASUAL 001 NCV';
  src: url('./assets/fonts/FTYSPEEDYCASUAL001NCV.woff2') format('woff2'),
  url('./assets/fonts/FTYSPEEDYCASUAL001NCV.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

select {
  width: 100%;

  font-family: 'FTY SPEEDY CASUAL NCV', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 5px;
  margin: 5px 0;
}

.app {
  font-family: 'FTY SPEEDY CASUAL NCV', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
}

img.logo {
  height: 100px;
}

.randomize-button {
  padding: 10px;
  margin: 10px;
}

.panel {
  border: solid black 2px;
  margin: 15px 10px;
  background: #d0c8d2;
  text-align: left;
  padding: 5px;
}

.panel-insert {
  border: solid black 2px;
  background: #fff2bd;
  display: inline-block;
  text-align: center;
  padding: 10px 5px 5px 10px;
  margin: -7px 10px 0 -7px;
  position: relative;
  border-right: 0;
  font-size: 1.5em;
}

.panel-insert-content {
  border: solid black 2px;
  background: #fff2bd;
  display: inline-block;
  text-align: center;
  padding: 5px;
  margin: 10px;
  position: relative;
}

.panel-insert:before {
  transform: skewX(-10deg);
  border: solid black 2px;
  border-left: 0;
  background: #fff2bd;
  content: " ";
  position: absolute;
  right: -5px;
  top: 0;
  bottom: 0;
  width: 10px;
  margin: -2px;
}

.panel-footer {
  text-align: right;
}

.panel-insert-bottom {
  border: solid black 2px;
  background: #fff2bd;
  display: inline-block;
  text-align: center;
  padding: 10px 10px 5px 10px;
  margin: 0 -5px -7px 10px;
  position: relative;
  border-right: 0;
  font-size: 1.5em;
}

.panel-insert-bottom:before {
  transform: skewX(-10deg);
  border: solid black 2px;
  border-right: 0;
  background: #fff2bd;
  content: " ";
  position: absolute;
  left: -5px;
  top: 0;
  bottom: 0;
  width: 10px;
  margin: -2px;
}


button {
  font-family: 'FTY SPEEDY CASUAL NCV', 'Avenir', Helvetica, Arial, sans-serif;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  border: solid 1px grey;
}

button:disabled {
  color: white;
  background: green;
  font-weight: bold;

}

.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.column {
  width: 100%;
  max-width: 768px;
}

</style>
