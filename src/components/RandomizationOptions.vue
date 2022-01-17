<template>
  <div class="panel">
    <div class="panel-insert">
      Custom Options
    </div>
    <div v-if="shown">
      <div>
        <button :disabled="modelValue.additionalModules <= 0"
                @click="additionalModulesChange((modelValue.additionalModules || 0) - 1)">-
        </button>
        {{ modelValue.additionalModules || 0 }}
        <button @click="additionalModulesChange(parseInt(modelValue.additionalModules || 0) + 1)">+</button>
        Extra Modules
      </div>

      <div>
        <label>
          <input type="checkbox" name="scenario" id="scenario" :checked="modelValue.scenario" @input="toggleScenario">
          Generate Scenario
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="scenario" id="decks" :checked="modelValue.decks" @input="togglePlayerDecks">
          Generate Player Decks
        </label>
      </div>

      <div @click="shown=!shown" class="panel-insert-content">
        Hide Options
      </div>
    </div>
    <div v-else>
      <div @click="shown=!shown" class="panel-insert-content">
        Show Options
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "RandomizationOptions",
  props: {
    modelValue: {
      default: {},
    },
  },
  data: () => ({
    shown: false,
  }),
  methods: {
    additionalModulesChange(modules) {
      const newValue = {...this.modelValue};
      newValue.additionalModules = modules;
      this.$emit("update:modelValue", newValue);
    },
    toggleScenario() {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        scenario: !this.modelValue.scenario
      });
    },
    togglePlayerDecks() {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        decks: !this.modelValue.decks
      });
    }
  },
}
</script>

<style scoped>

</style>
