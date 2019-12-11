<template>
  <div id="app">
    <Randomizer :scenarios="data.scenarios" :modules="data.modules" />
  </div>
</template>

<script>
import Randomizer from './components/Randomizer';
import {scenarios} from './data/scenarios';
import {modules} from './data/modules';
export default {
  name: 'app',
  data: () => ({
    data: {
      scenarios,
      modules,
    }
  }),
  components: {
    Randomizer,
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
</style>
