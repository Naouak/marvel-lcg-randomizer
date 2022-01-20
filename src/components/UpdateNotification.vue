<template>
  <div>
    A new update is available.
    <button @click="update">Refresh to update</button>
  </div>
</template>

<script>
export default {
  name: "UpdateNotification",
  methods:{
    update(){
      window.location.reload();
    }
  }
}
</script>

<style scoped>

</style>