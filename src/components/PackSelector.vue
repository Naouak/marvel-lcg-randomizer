<template>
  <div class="packs-selector panel">
    <div class="panel-insert">Selected packs</div>
    <div v-if="!shown" class="packs-selected">
      {{ modelValue.join(", ") }}
    </div>
    <div class="packs" v-if="shown">
      <div
        class="pack-type-column"
        :key="type"
        v-for="(packets, type) in packs"
      >
        <h3>{{ type }}</h3>
        <label :key="pack" v-for="pack in packets">
          <input
            type="checkbox"
            :checked="modelValue.indexOf(pack) >= 0"
            @input="togglePack(pack, $event.target.checked)"
          />{{ pack }}
        </label>
      </div>
    </div>

    <div class="toggle">
      <div v-if="!shown">
        <div @click="shown = !shown" class="panel-insert-content">
          <span>Add/Remove Packs</span>
        </div>
      </div>
      <div v-else>
        <div>
          <div class="panel-insert-content">
            <span @click="selectAllPacks()">Select all</span>
          </div>
          <div class="panel-insert-content" @click="shown = !shown">
            <span>Finish Selection</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackSelector",
  props: {
    modelValue: {
      default: ["Core Set"],
    },
    packs: {
      default: ["Core Set"],
    },
  },
  data: () => ({
    shown: false,
  }),
  emits: ["update:modelValue"],
  methods: {
    togglePack(pack, checked) {
      console.log("test");
      const packs = this.modelValue.slice(0);
      if (checked) {
        packs.push(pack);
      } else {
        packs.splice(packs.indexOf(pack), 1);
      }

      this.$emit("update:modelValue", packs);
    },
    selectAllPacks() {
      const packs = [];
      for (const packets in this.packs) {
        this.packs[packets].forEach((pack) => {
          packs.push(pack);
        });
      }
      this.$emit("update:modelValue", packs);
    },
  },
};
</script>

<style scoped>
label {
  display: block;
}

.packs {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.packs-selected {
  padding-top: 5px;
}

.toggle {
  text-align: right;
}
</style>
