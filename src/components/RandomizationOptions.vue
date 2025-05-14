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
      <br />
      <div>
        <label>
          <input type="checkbox" name="scenario" id="decks" :checked="modelValue.useStarRating"
            @input="toggleStarRating">
          Use Starred Difficulty Level (see the <a target="_blank" rel="noopener noreferrer" href="https://boardgamegeek.com/thread/2438111/star-difficulty-levels/page/1">BGG page</a> for more details)
        </label>
      </div>
      <div v-if="modelValue.useStarRating" class="star-rating">
        <div :key="rating" v-for="rating in [0, 1, 2, 3, 4, 5]">
          <button v-if="rating == 0" :style="{ backgroundColor: modelValue.starRating != rating ? 'white' : 'yellow' }"
            :alt="rating" @click="setStarRating(rating)">
            {{ rating == 0 ? "0 Stars" : "" }}
          </button>
          <button v-if="rating > 0" class="star" :style="{ backgroundColor: modelValue.starRating < rating ? 'black' : 'yellow' }"
            :alt="rating" @click="setStarRating(rating)">
            {{ rating == 0 ? "0 Stars" : "" }}
          </button>
        </div>
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
import { starRatingDifficultyRange } from "@/data/starRatingDifficultyRange.js";

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
    },
    toggleStarRating() {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        useStarRating: !this.modelValue.useStarRating
      });
    },
    setStarRating(starRatingOption) {
      this.$emit("update:modelValue", {
        ...this.modelValue,
        starRating: starRatingOption,
        starRatingRange: starRatingDifficultyRange[starRatingOption],
      });
    }
  },
}
</script>

<style scoped>
.star-rating {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.star {
  aspect-ratio: 1;
  clip-path: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%); 
}
</style>
