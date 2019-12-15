<template>
    <div class="packs-selector panel">
        <div class="panel-insert">
            Selected packs

        </div>
        <div v-if="!shown" class="packs-selected">
            {{value.join(", ")}}
        </div>
        <div class="packs" v-if="shown">
            <div class="pack-type-column" :key="type" v-for="(packets, type) in packs">
                <h3>{{type}}</h3>
                <label :key="pack" v-for="pack in packets">
                    <input type="checkbox" :checked="value.indexOf(pack) >= 0" @input="togglePack(pack, $event.target.checked)">{{pack}}
                </label>
            </div>
        </div>

        <div class="toggle">
            <div @click="shown=!shown" class="panel-insert-content">
                <span v-if="!shown">Add/Remove Packs</span>
                <span v-else>Finish Selection</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PackSelector",
        props: {
            value: {
                default: ["Core Set"],
            },
            packs: {
                default: ["Core Set"],
            }
        },
        data: () => ({
            shown: false,
        }),
        methods: {
            togglePack(pack, checked){
                const packs = this.value.slice(0);
                if(checked){
                    packs.push(pack);
                } else {
                    packs.splice(packs.indexOf(pack), 1);
                }

                this.$emit("input", packs);
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
