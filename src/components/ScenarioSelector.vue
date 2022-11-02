<template>
  <div class="panel">
    <div class="panel-insert">
      Scenario Selector
    </div>
    <div>
      <select :value="modelValue[0]?.name" @change="e => scenarioSelected(e.target.value)">
        <option value="">-- Any Scenario --</option>
        <option v-for="scenario in availableScenarios" :key="scenario.name" :value="scenario.name">
          {{ scenario.name }} - {{ scenario.pack }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScenarioSelector",
  props: {
    availableScenarios: {
      default: [],
    },
    modelValue: {
      default: [],
    },
  },
  methods: {
    scenarioSelected(scenarioName) {
      this.$emit("update:modelValue", this.availableScenarios.filter(scenario => scenario.name === scenarioName));
    }
  }
}
</script>

<style scoped>

</style>