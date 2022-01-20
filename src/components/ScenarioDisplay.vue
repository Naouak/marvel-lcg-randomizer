<template>
  <div class="scenario-randomizer panel" v-if="scenario">
    <div class="title panel-insert" @click="shown=!shown">Scenario</div>
    <div class="content" v-if="shown">
      <div>
        <div class="main-scenario">
          <img :src="scenario.scenario.img" :alt="scenario.scenario.name">
          <div class="panel-insert-content">
            {{ scenario.scenario.name }}({{ scenario.scenario.pack }})
          </div>
        </div>
        <div v-bind:key="index" v-for="({deck, modules}, index) in scenario.modules">
          <div class="deck" v-if="modules.length > 0">
            <div class="deck-name" v-if="scenario.modules.length > 1">Deck {{ deck.name }}</div>
            <div class="modules">
              <div class="module" :key="index2" v-for="(mod, index2) in modules">
                <img :src="mod.img" :alt="mod.name"/>
                <div class="panel-insert-content">
                  {{ mod.name }}({{ mod.pack }})
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="difficulty panel-insert-content">
        Difficulty:
        <span class="difficulty-value">
                    {{ scenario.difficulty }}
                </span>
      </div>

    </div>
    <div class="panel-footer">
      <button class="panel-insert-bottom" @click="$emit('randomize')">Reroll Scenario</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ScenarioDisplay",
  props: {
    scenario: {
      required: true,
    },
  },
  data() {
    return {
      shown: true,
    };
  },
}
</script>

<style scoped>
img {
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
}

.modules {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.modules .module {
  flex: 1;
  margin: 20px 0;
  display: inline-block;
}

.difficulty-value {
  font-weight: bold;
}

.content {
  text-align: center;
}

.toggle {
  text-align: right;
}
</style>
