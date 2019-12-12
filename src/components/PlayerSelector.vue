<template>
    <div class="player-selector">
        Number of player
        <div class="player-buttons">
            <button :disabled="value===1" @click="$emit('input', 1)">Solo</button>
            <button :disabled="value===2" @click="$emit('input', 2)">Duo</button>
            <button :disabled="value===3" @click="$emit('input', 3)">3 players</button>
            <button :disabled="value===4" @click="$emit('input', 4)">4 players</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PlayerSelector",
        props: {
            value: {
                default: 1,
            }
        },
        methods: {
            addPlayer(){
                this.$emit("input", Math.min(this.value+1, 4));
            },
            removePlayer(){
                this.$emit("input", Math.max(this.value-1, 1));
            }
        }
    }
</script>

<style scoped>
    .player-selector{
        margin: 10px;
    }

.player-buttons{
    display: flex;
    justify-content: stretch;
}

    .player-buttons > button{
        flex-grow: 1;
    }
</style>
