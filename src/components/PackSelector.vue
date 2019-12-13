<template>
    <div class="packs-selector">
        <div @click="shown=!shown">Available packs:
        <span v-if="!shown">
            {{value.join(",")}}
        </span>
        </div>
        <div v-if="shown">
            <label :key="pack" v-for="pack in packs">
                <input type="checkbox" :checked="value.indexOf(pack) >= 0" @input="togglePack(pack, $event.target.checked)">{{pack}}
            </label>
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
    .packs-selector{
        margin: 10px;
        text-align: left;
    }

    label{
        display: block;
    }
</style>
