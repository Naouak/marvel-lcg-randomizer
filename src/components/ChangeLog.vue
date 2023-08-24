<template>
  <div class="changelog panel">
    <div @click="shown=!shown" class="panel-insert">Changelog</div>

    <div v-if="shown">
      <div class="changelog-entry">
        <h3>On August 24th 2023</h3>
        <ul>
          <li>Add Next Evolution Scenarios and Modules.</li>
          <li>Fix issue with pack selection after "select all" was used.</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On August 21st 2023</h3>
        <ul>
          <li>
            Fix Aspect Selection (available aspects will be based on packs selected and pool will only be available when
            Deadpool is selected).
          </li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On August 5th 2023</h3>
        <ul>
          <li>Add X-Force wave heroes (no scenario and modules yet).</li>
          <li>Add Pool Aspect if you have Deadpool in your list of pack selected.</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On march 9th 2023</h3>
        <ul>
          <li>Add Rogue and Gambit</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On december 5th 2022</h3>
        <ul>
          <li>Minor design updates for mobile</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On november 21st 2022</h3>
        <ul>
          <li>Add Magneto ally card requirement for Master Mold scenario</li>
        </ul>
        <h3>On november 14th 2022</h3>
        <ul>
          <li>Add Wolverine</li>
          <li>Add Storm</li>
          <li>Add Mojo</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On november 2nd 2022</h3>
        <ul>
          <li>Add Scenario Selector to only generate modules for a selected base scenario</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On october 2nd 2022</h3>
        <ul>
          <li>Add Mutant Genesis</li>
          <li>Add Cyclops</li>
          <li>Add Phoenix</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On september 14th 2022</h3>
        <ul>
          <li>Add SP//dr</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On april 13th 2022</h3>
        <ul>
          <li>Add Sinister Motives</li>
          <li>Add Nova</li>
          <li>Add Ironheart</li>
          <li>Add Spider-Ham</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On april 4th 2022</h3>
        <ul>
          <li>Added Ship Command modules for some Galaxy's Most Wanted Scenarios.</li>
          <li>Save selected difficulties in local storage.</li>
          <li>Improve scenario display.</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On march 29th 2022</h3>
        <ul>
          <li>Add required modules to scenarios.</li>
          <li>Add "Power Stone" module (not randomizable).</li>
          <li>Update scenario randomization option to include required modules.</li>
          <li>Update The Hood to use a "set aside deck".</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On january 20th 2022</h3>
        <ul>
          <li>Add possibility to reroll scenario and decks separately</li>
          <li>Improve updating of the cache</li>
        </ul>
        <h3>On january 17th 2022</h3>
        <ul>
          <li>Add Vision</li>
          <li>Improve design on desktops and large screens</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On january 15th 2022</h3>
        <ul>
          <li>Add Valkyrie</li>
          <li>Add The Hood</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On december 3rd 2021</h3>
        <ul>
          <li>Add War Machine</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On october 27th 2021</h3>
        <ul>
          <li>Add Nebula</li>
          <li>Add The Mad Titan's Shadow</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On july 22th 2021</h3>
        <ul>
          <li>Add Drax</li>
          <li>Add Venom</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On june 12th 2021</h3>
        <ul>
          <li>Add Star-Lord</li>
          <li>Add Gamora</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On april 6th 2021</h3>
        <ul>
          <li>Add Galaxy's Most Wanted</li>
          <li>Add Hawkeye alter ego</li>
        </ul>
      </div>
      <div class="changelog-entry">
        <h3>On march 3rd 2021</h3>
        <ul>
          <li>Add Scarlet Witch</li>
        </ul>
      </div>
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
  name: "ChangeLog",
  data: () => ({
    shown: true,
  })
}
</script>

<style scoped>
.changelog {
  text-align: left;
}
</style>
