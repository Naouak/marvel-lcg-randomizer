<template>
    <div class="scenario-randomizer panel" v-if="scenario">
        <div class="title panel-insert" @click="shown=!shown">Scenario</div>
        <div class="content" v-if="shown">
            <div class="random-scenario">
                <div>
                    <img :src="scenario.scenario.img" :alt="scenario.scenario.name">
                    <div class="panel-insert-content">
                        {{scenario.scenario.name}}({{scenario.scenario.pack}})
                    </div>
                </div>
                <div v-bind:key="index" v-for="(mod, index) in scenario.modules">
                    <img :src="mod.img" :alt="mod.name"/>
                    <div class="panel-insert-content">
                        {{mod.name}}({{mod.pack}})
                    </div>
                </div>
            </div>
            <div class="difficulty panel-insert-content">
                Difficulty:
                <span class="difficulty-value">
                    {{scenario.difficulty}}
                </span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Scenario.vue",
        props: {
            scenario: {
                required: true,
            },
        },
        data() {
            return {
                shown: true,
            };
        },
    }
</script>

<style scoped>
    .random-scenario img{
        box-sizing: border-box;
        width: 100%;
        max-width: 500px;
        padding: 0 10px;
    }

    .random-scenario{
        display: flex;
        justify-content: center;
    }

    .random-scenario > div{
        margin: 20px 0;
        display: inline-block;
    }

    .difficulty-value{
        font-weight: bold;
    }

    .content{
        text-align: center;
    }
</style>
