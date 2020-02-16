<template>
    <div class="difficulties-selector panel">
        <div class="panel-insert">
            Selected difficulties
        </div>
        <div v-if="!shown" class="difficluties-selected">
            {{value.join(", ")}}
        </div>
        <div class="packs" v-if="shown">
            <div class="pack-type-column" :key="difficulty" v-for="difficulty in difficulties">
                <label>
                    <input type="checkbox" :checked="value.indexOf(difficulty) >= 0" @input="toggleDifficulty(difficulty, $event.target.checked)">{{difficulty}}
                </label>
            </div>
        </div>

        <div class="toggle">
            <div @click="shown=!shown" class="panel-insert-content">
                <span v-if="!shown">Select difficulties</span>
                <span v-else>Finish Selection</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Difficulty Selector",
        props: {
            value: {
                default: ["Standard", "Expert"],
            },
            difficulties: {
                default: ["Standard", "Expert"],
            }
        },
        data: () => ({
            shown: false,
        }),
        methods: {
            toggleDifficulty(pack, checked){
                const difficulties = this.value.slice(0);
                if(checked){
                    difficulties.push(pack);
                } else {
                    difficulties.splice(difficulties.indexOf(pack), 1);
                }

                this.$emit("input", difficulties);
            }
        }
    }
</script>

<style scoped>

    label{
        display: block;
    }

    .packs{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .packs-selected{
        padding-top: 5px;
    }

    .toggle{
        text-align: right;
    }
</style>
