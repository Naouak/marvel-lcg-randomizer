<template>
    <div class="changelog panel">
        <div @click="shown=!shown" class="panel-insert">Changelog</div>

        <div v-if="shown">
            <div class="changelog-entry">
                <h3>On february 16th 2020</h3>
                <ul>
                    <li>Add Black Widow and Doctor Strange</li>
                    <li>Update Green Goblin and Wrecking Crew pictures</li>
                    <li>Add contribute note at the bottom of the page</li>
                    <li>Add first player indicator in deck list</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On january 2nd 2020</h3>
                <ul>
                    <li>Add offline availability</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On december 23rd 2019</h3>
                <ul>
                    <li>Refactored the randomization for a bit more of future proofing</li>
                    <li>Add support for first customization option: Extra modules</li>
                </ul>
                <h3>On december 15th 2019</h3>
                <ul>
                    <li>Add saving of the selected packs you own in your browser</li>
                    <li>Add the changelog list</li>
                    <li>Display pack selection by categories (Heroes, Modules, Scenarios)</li>
                    <li>A bit of redesign</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On december 13th 2019</h3>
                <ul>
                    <li>Add Support for Multiple packs</li>
                    <li>Add scenarios and modules from Green Goblins and Wrecking Crew</li>
                    <li>Add Heroes Ms. Marvel, Captain America and Thor</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On december 12th 2019 (and before)</h3>
                <ul>
                    <li>Add Scenario randomization</li>
                    <li>Add Hero randomization</li>
                    <li>Add Number of player selection</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Changelog",
        data: () => ({
            shown: true,
        })
    }
</script>

<style scoped>
    .changelog{
        text-align: left;
    }
</style>
