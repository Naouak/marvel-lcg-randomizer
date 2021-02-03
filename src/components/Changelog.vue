<template>
    <div class="changelog panel">
        <div @click="shown=!shown" class="panel-insert">Changelog</div>

        <div v-if="shown">
            <div class="changelog-entry">
                <h3>On february 3rd 2021</h3>
                <ul>
                    <li>Add Quicksilver</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On january 21st 2021</h3>
                <ul>
                    <li>Add Wasp</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On january 18th 2021</h3>
                <ul>
                    <li>Add Ant-Man</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On october 9th 2020</h3>
                <ul>
                    <li>Add The Rise of Red Skull and Kang scenarios and modules</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On may 24th 2020</h3>
                <ul>
                    <li>Add Hulk, Hawkeye(missing the alter-ego visual) and Spider-woman</li>
                    <li>Add support for multiple aspects heroes (Spider-woman / Jessica Drew - The Rise of Red Skull)</li>
                    <li>Fix difficulties</li>
                </ul>
            </div>
            <div class="changelog-entry">
                <h3>On february 16th 2020</h3>
                <ul>
                    <li>Add Black Widow and Doctor Strange</li>
                    <li>Update Green Goblin and Wrecking Crew pictures</li>
                    <li>Add contribute note at the bottom of the page</li>
                    <li>Add first player indicator in deck list</li>
                    <li>Add custom options to generate only scenario or decks</li>
                    <li>Add difficulty selector</li>
                    <li>Add Wrecking Crew custom difficulties</li>
                    <li>Add Nightmare difficulty in selectable difficulties (All 3 levels of a villains)</li>
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
