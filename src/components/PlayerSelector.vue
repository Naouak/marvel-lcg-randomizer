<template>
    <div class="player-selector panel">
        <p class="panel-insert">Select the number of players</p>
        <div class="player-buttons">
            <button :disabled="modelValue===1" @click="$emit('update:modelValue', 1)">Solo</button>
            <button :disabled="modelValue===2" @click="$emit('update:modelValue', 2)">Duo</button>
            <button :disabled="modelValue===3" @click="$emit('update:modelValue', 3)">3 players</button>
            <button :disabled="modelValue===4" @click="$emit('update:modelValue', 4)">4 players</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PlayerSelector",
        props: {
            modelValue: {
                default: 1,
            }
        },
        methods: {
            addPlayer(){
                this.$emit("update:ModelValue", Math.min(this.modelValue+1, 4));
            },
            removePlayer(){
                this.$emit("update:ModelValue", Math.max(this.modelValue-1, 1));
            }
        }
    }
</script>

<style scoped>
    p{
        text-align: left;
    }

    .player-buttons{
        display: flex;
        justify-content: stretch;
    }

    .player-buttons button{
        width: 25%;
    }

</style>
