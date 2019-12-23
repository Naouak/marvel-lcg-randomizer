<template>
    <div class="panel">
        <div class="panel-insert">
            Custom Options
        </div>
        <div v-if="shown">
            <div>
                <button :disabled="value.additionalModules <= 0" @click="additionalModulesChange((value.additionalModules || 0) - 1)">-</button>
                {{ value.additionalModules||0 }}
                <button @click="additionalModulesChange(parseInt(value.additionalModules || 0) + 1)">+</button>
                Extra Modules
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
    export default {
        name: "RandomizationOptions",
        props: {
            value: {
                default: {},
            },
        },
        data: () => ({
            shown: false,
        }),
        methods: {
            additionalModulesChange(modules){
                const newValue = {...this.value};
                newValue.additionalModules = modules;
                this.$emit("input", newValue);
            },
        },
    }
</script>

<style scoped>

</style>
