<template>
  <div class="deck">
    <h3 class="deck-name panel-insert-content" v-if="showTitle">{{ deck.name }}</h3>

    <div class="modules">
      <div class="module" :key="index2" v-for="(mod, index2) in modules">
        <img :src="mod.img" :alt="mod.name"/>
        <div class="module-title panel-insert-content">
          <span v-if="mod.required === true">Required:</span> {{ mod.name }} ({{ mod.pack }})
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "EncounterDeck",
  props: {
    showTitle: {
      default: false,
    },
    deck: {},
    modules: {},
  }
}
</script>

<style scoped>
.deck{
  margin: 20px 0;
}

.module:not(:last-of-type){
  margin-bottom: 40px;
}

img{
  max-width: 480px;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
}

.module-title{
  display: block;
}
</style>
