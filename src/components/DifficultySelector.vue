<template>
    <div class="difficulties-selector panel">
        <div class="panel-insert">
            Selected difficulties
        </div>
        <div v-if="!shown" class="difficulties-selected">
            {{value.join(", ")}}
        </div>
        <div class="difficulties" v-if="shown">
            <h3>Difficulties</h3>
            <div class="difficulty-type-column" :key="difficulty" v-for="difficulty in difficulties">
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
        name: "DifficultySelector",
        props: {
            value: {
                default: ["Standard", "Expert", "Standard II", "Expert II"],
            },
            difficulties: {
                default: ["Standard", "Expert", "Standard II", "Expert II"],
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

    .difficulties-selected{
        padding-top: 5px;
    }

    .toggle{
        text-align: right;
    }
</style>
