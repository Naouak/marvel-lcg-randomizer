if(!self.define){let e,r={};const a=(a,i)=>(a=new URL(a+".js",i).href,r[a]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=r,document.head.appendChild(e)}else e=a,importScripts(a),r()})).then((()=>{let e=r[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const m=e||("document"in self?document.currentScript.src:"")||location.href;if(r[m])return;let n={};const s=e=>a(e,m),l={module:{uri:m},exports:n,require:s};r[m]=Promise.all(i.map((e=>l[e]||s(e)))).then((e=>(c(...e),n)))}}define(["./workbox-03ef139c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"marvel-lcg-randomizer"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/marvel-lcg-randomizer/css/app.24939b89.css",revision:null},{url:"/marvel-lcg-randomizer/favicon.jpg",revision:"ac4d27e6308fae015c02ffdfdec15cfc"},{url:"/marvel-lcg-randomizer/fonts/FTYSPEEDYCASUAL001NCV.10a34fc5.woff",revision:null},{url:"/marvel-lcg-randomizer/fonts/FTYSPEEDYCASUAL001NCV.441567d7.woff2",revision:null},{url:"/marvel-lcg-randomizer/fonts/FTYSPEEDYCASUALNCV.007d47dc.woff2",revision:null},{url:"/marvel-lcg-randomizer/fonts/FTYSPEEDYCASUALNCV.6f8fb106.woff",revision:null},{url:"/marvel-lcg-randomizer/images/aspects/MC01en_55.jpg",revision:"582963aec48ce6b0d0759ed0c1fdd18e"},{url:"/marvel-lcg-randomizer/images/aspects/MC01en_62.jpg",revision:"9248a874207eaeb8e3808e1bf58934cd"},{url:"/marvel-lcg-randomizer/images/aspects/MC01en_72.jpg",revision:"6d2f0cbee84f7185a198804b0da86752"},{url:"/marvel-lcg-randomizer/images/aspects/MC01en_79.jpg",revision:"fe9fc33f15430a20f602a5a7427ee531"},{url:"/marvel-lcg-randomizer/images/aspects/mc44_announce_cards_igotthis.png",revision:"4dffb62d5b8ec92222683078b72c7c63"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_black-panther.png",revision:"d5d6c1516f633a99dc39aa34ab4bded7"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_captain-marvel.png",revision:"ddfba82d162b4974c5da4eabee7c2bdd"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_carol-danvers.png",revision:"a0cfc9f22e21831ffe6eac73bc1970f8"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_jennifer-walters.png",revision:"61f1c24abd1c64fc41b5773a3e5c3723"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_peter-parker.png",revision:"b03b0cb4634ec88f99c66d2b17743fea"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_she-hulk.png",revision:"a3b2c6e54c8727075d36dd0d4f12ca30"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_spider-man.png",revision:"ddd1ccdcf662cb9f9b5bfdfe0e12708e"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_tchalla.png",revision:"db5074ecf5cec4134235835f3c119a6f"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_card_tony-stark.png",revision:"8cabe4a8ff70ac5bd5ea4ae7961b61f6"},{url:"/marvel-lcg-randomizer/images/heroes/mc01en_iron-man.png",revision:"dc8e8cc44ee0e9c2151828c9ddcfa12c"},{url:"/marvel-lcg-randomizer/images/heroes/mc04en_card_captain-america.png",revision:"d1a9010e414503948316eae3b30b6115"},{url:"/marvel-lcg-randomizer/images/heroes/mc04en_card_steve-rogers.png",revision:"2dd26ba0efe333201a00f86ce98ffb94"},{url:"/marvel-lcg-randomizer/images/heroes/mc05en_kamala-khan.png",revision:"65f55bb6a95293a1fd43bd92036a01d8"},{url:"/marvel-lcg-randomizer/images/heroes/mc05en_ms-marvel.png",revision:"c5a73f1ed40e477b94cd47d7e1944a3f"},{url:"/marvel-lcg-randomizer/images/heroes/mc06en_a1_odinson.png",revision:"b76e47312a0d6639cc910a6d1fdd0fb8"},{url:"/marvel-lcg-randomizer/images/heroes/mc06en_a1_thor.png",revision:"8eb0ec48c419fdf68f96a4aee5f56b17"},{url:"/marvel-lcg-randomizer/images/heroes/mc07en_black-widow.png",revision:"554be3bdcddd616d33cc4ede99eabb01"},{url:"/marvel-lcg-randomizer/images/heroes/mc07en_natasha-romanoff.png",revision:"20397c04a9a27d288fa198a5d1dd7131"},{url:"/marvel-lcg-randomizer/images/heroes/mc08en_doctor-strange.png",revision:"d98e59c84b398d6c7602373156b388ac"},{url:"/marvel-lcg-randomizer/images/heroes/mc08en_stephen-strange.png",revision:"6fb5a0c9fd3b01d03bc1bd376a8e6e72"},{url:"/marvel-lcg-randomizer/images/heroes/mc09en-hulk.png",revision:"b3113f7aa69522f3a310ae721e200c3f"},{url:"/marvel-lcg-randomizer/images/heroes/mc09en_bruce-banner.png",revision:"d3b77fe0b5cdd04dbdaf2c0d1b713a70"},{url:"/marvel-lcg-randomizer/images/heroes/mc10en_clint-barton.png",revision:"6160822150d1caca5ce3533558aba341"},{url:"/marvel-lcg-randomizer/images/heroes/mc10en_hawkeye.png",revision:"3acd17cdb81099220dd4c340c91a5c35"},{url:"/marvel-lcg-randomizer/images/heroes/mc10en_jessica-drew.png",revision:"635076bf8493c557f33e2fb0f9cbee60"},{url:"/marvel-lcg-randomizer/images/heroes/mc10en_spider-woman.png",revision:"9937d2b445a8c1325aa583b5b414d386"},{url:"/marvel-lcg-randomizer/images/heroes/mc11en_ant-man.png",revision:"bf3a6c0a2dbd1ab622c0eb0bd9b8cb57"},{url:"/marvel-lcg-randomizer/images/heroes/mc11en_scott-lang.png",revision:"ed3453c16b44b5ee5fd0320a03c1e5b2"},{url:"/marvel-lcg-randomizer/images/heroes/mc13en_nadia-van-dyne.png",revision:"07b207fb32ceed7dd1e3964122929dec"},{url:"/marvel-lcg-randomizer/images/heroes/mc13en_wasp.png",revision:"f5755b51b8a25f22f397302c736d7155"},{url:"/marvel-lcg-randomizer/images/heroes/mc14en_pietro-maximoff-alter-ego.png",revision:"38aee1c8c102fe8fd0e949568cd663e2"},{url:"/marvel-lcg-randomizer/images/heroes/mc14en_quicksilver-hero.png",revision:"e2a3b7473a81a0f28b3d0aad702a09ee"},{url:"/marvel-lcg-randomizer/images/heroes/mc15en_scarlet-witch.png",revision:"5e872bed1c08f9931242ba20c8fa5986"},{url:"/marvel-lcg-randomizer/images/heroes/mc15en_wanda-maximoff.png",revision:"30e4994a13ee96323606ef13ee922da6"},{url:"/marvel-lcg-randomizer/images/heroes/mc16en_groot-alter-ego.png",revision:"732f6cee7f5a8cd49b45f8799ba87f78"},{url:"/marvel-lcg-randomizer/images/heroes/mc16en_groot-hero.png",revision:"ca04f2d717fd4ddc7dd13ff6abb8cc32"},{url:"/marvel-lcg-randomizer/images/heroes/mc16en_rocket-racoon-alter-ego.png",revision:"b6823bcf3402e8a4d230a0c19e80c9fe"},{url:"/marvel-lcg-randomizer/images/heroes/mc16en_rocket-racoon-hero.png",revision:"3a9a8e0b1090c16b430fbc0ff122127a"},{url:"/marvel-lcg-randomizer/images/heroes/mc17en_peter-quill.png",revision:"15bc5c8d4044f32ea9ef7dba7c3b477f"},{url:"/marvel-lcg-randomizer/images/heroes/mc17en_star-lord-hero.png",revision:"e373e3cf11ec3a8533154a7fda4b8260"},{url:"/marvel-lcg-randomizer/images/heroes/mc18en_gamora-alter-ego.png",revision:"eef85a6f28567f18cfc3f13372a63c8e"},{url:"/marvel-lcg-randomizer/images/heroes/mc18en_gamora-hero.png",revision:"8d070827919526855672e7116e272069"},{url:"/marvel-lcg-randomizer/images/heroes/mc19en_drax-alter-ego.png",revision:"25c7d06acba7113d3a6e40febfe9ea15"},{url:"/marvel-lcg-randomizer/images/heroes/mc19en_drax-hero.png",revision:"0201b425e5ddf69185118ad47b451ed6"},{url:"/marvel-lcg-randomizer/images/heroes/mc20en_flash-thompson.png",revision:"1496b8d9b6b050df24c586b1b015d1ef"},{url:"/marvel-lcg-randomizer/images/heroes/mc20en_venom.png",revision:"c4777802a95cd7eaeec68b3357beb0a1"},{url:"/marvel-lcg-randomizer/images/heroes/mc21en_adam-warlock-alter-ego.png",revision:"22cf38b4e0833b57d6633a0a74d0f79f"},{url:"/marvel-lcg-randomizer/images/heroes/mc21en_adam-warlock-hero.png",revision:"d7ff4e11c95cfb268e186a3793a95540"},{url:"/marvel-lcg-randomizer/images/heroes/mc21en_monica-rambeau.png",revision:"b680b211cf743026236c5348e0b83b23"},{url:"/marvel-lcg-randomizer/images/heroes/mc21en_spectrum.png",revision:"4f48d797fe699f9b9ac932c24a6075de"},{url:"/marvel-lcg-randomizer/images/heroes/mc22en_nebula-alter-ego.png",revision:"bf4b9d1980cfb56f58c72b469639c9e5"},{url:"/marvel-lcg-randomizer/images/heroes/mc22en_nebula-hero.png",revision:"c2cb0dcaeef28729e3103b406dd83410"},{url:"/marvel-lcg-randomizer/images/heroes/mc23en_war-machine-alter-ego.png",revision:"49d33ba89513a963df114100ba1ae034"},{url:"/marvel-lcg-randomizer/images/heroes/mc23en_war-machine-hero.png",revision:"f7ae2938b06c50f32ea4be0333c57caa"},{url:"/marvel-lcg-randomizer/images/heroes/mc25en_card_brunnhilde.png",revision:"ea74f7fc61604d4715fd8edc19be5d66"},{url:"/marvel-lcg-randomizer/images/heroes/mc25en_card_valkyrie.png",revision:"97ce2a6be799b13d1adde9d0d95c2323"},{url:"/marvel-lcg-randomizer/images/heroes/mc26en_cardsingle_vision_alterego.png",revision:"9c6f61bb6555a71dc05cfeb572cea8c9"},{url:"/marvel-lcg-randomizer/images/heroes/mc26en_cardsingle_vision_hero.png",revision:"f3e1c98e639abd583907f435518d0a1e"},{url:"/marvel-lcg-randomizer/images/heroes/mc27en_ghost_spider.png",revision:"e0c719d1956527422c4fc30e3afa6a22"},{url:"/marvel-lcg-randomizer/images/heroes/mc27en_gwen_stacy.png",revision:"dd87a9d61d0b63719bbb1bc54c070662"},{url:"/marvel-lcg-randomizer/images/heroes/mc27en_miles_morales.png",revision:"87f4d32e49a46db96b6c622c33ad6447"},{url:"/marvel-lcg-randomizer/images/heroes/mc27en_spider-man.png",revision:"ad3e4d633d5b5582a303856f1cba82b1"},{url:"/marvel-lcg-randomizer/images/heroes/mc28_nova_cardsingles__nova.png",revision:"10de94de2e0a427d2101dca82c70f3d6"},{url:"/marvel-lcg-randomizer/images/heroes/mc28_nova_cardsingles__samalexander.png",revision:"d2a9c84b33f2985ba547a5ccd9dfb781"},{url:"/marvel-lcg-randomizer/images/heroes/mc29en_ironheart_version_1_1a.png",revision:"a670ba13b83fe9c322bba434ba4eed90"},{url:"/marvel-lcg-randomizer/images/heroes/mc29en_riri_williams_version_1_1b.png",revision:"fc1c8ce447b616eaa25efbfc8deca016"},{url:"/marvel-lcg-randomizer/images/heroes/mc30_spider-ham_cardsingles__peterporker.png",revision:"111b86b991dff91f695e59fdbbf47a6e"},{url:"/marvel-lcg-randomizer/images/heroes/mc30_spider-ham_cardsingles__spider-ham.png",revision:"624ce476326f6382048c01c5c272cea9"},{url:"/marvel-lcg-randomizer/images/heroes/mc31_spdr_peniparker.png",revision:"15c478b19fcaa3516a91350b919d09b9"},{url:"/marvel-lcg-randomizer/images/heroes/mc31_spdr_spdrsuit.png",revision:"43595674a580d92832bb427116d31efb"},{url:"/marvel-lcg-randomizer/images/heroes/mc32_colossus.png",revision:"0ff741a7b3333918480b1859b6f423d8"},{url:"/marvel-lcg-randomizer/images/heroes/mc32_kitty_pryde.png",revision:"7778da5d64ef9772b92dc58bb6795adf"},{url:"/marvel-lcg-randomizer/images/heroes/mc32_piotr_rasputin.png",revision:"b229c3338651bb5bf6d8d25c0133bc84"},{url:"/marvel-lcg-randomizer/images/heroes/mc32_shadowcat.png",revision:"02a7673266efd0fd4f49f77dde37358e"},{url:"/marvel-lcg-randomizer/images/heroes/mc33_cyclops.png",revision:"3daeedf961bda9e75ca8a92d38f428a3"},{url:"/marvel-lcg-randomizer/images/heroes/mc33_scott_summers.png",revision:"9508dcd9485119b5281254abbc9ebff2"},{url:"/marvel-lcg-randomizer/images/heroes/mc34_jean_grey.png",revision:"a527c86b1b625827902305fbf5f3452e"},{url:"/marvel-lcg-randomizer/images/heroes/mc34_phoenix.png",revision:"92a37c51ff579afa40a201748601dd5e"},{url:"/marvel-lcg-randomizer/images/heroes/mc35_wolverine_cards_logan.png",revision:"4c20ecfd3c4c628c0837ea5661e26b5b"},{url:"/marvel-lcg-randomizer/images/heroes/mc35_wolverine_cards_wolverine.png",revision:"ee8cd4451fd53a7a3fc7b59d5bcd5d8b"},{url:"/marvel-lcg-randomizer/images/heroes/mc36_card_ororo_munroe.png",revision:"c0df0a9c942805dd742e8e26e0be30c8"},{url:"/marvel-lcg-randomizer/images/heroes/mc36_card_storm.png",revision:"b614ea77578762492ad621426a948d17"},{url:"/marvel-lcg-randomizer/images/heroes/mc37_card_gambit.png",revision:"56fc1dc3e564fa124f240b4d62c5755a"},{url:"/marvel-lcg-randomizer/images/heroes/mc37_card_remy_lebeau.png",revision:"f4a7e5698c07c2637e19d3ad0ced0734"},{url:"/marvel-lcg-randomizer/images/heroes/mc38_card_anna_marie.png",revision:"57402607083939c128489b379608cafe"},{url:"/marvel-lcg-randomizer/images/heroes/mc38_card_rogue.png",revision:"ddd7eee63933083bcfbabaab6f11dd2e"},{url:"/marvel-lcg-randomizer/images/heroes/mc40_cardsingles_cable.png",revision:"fb149592b09205b11aea13e812abcf54"},{url:"/marvel-lcg-randomizer/images/heroes/mc40_cardsingles_domino.png",revision:"b598a11c27f32727413409d9ba740035"},{url:"/marvel-lcg-randomizer/images/heroes/mc40_cardsingles_nathansummers.png",revision:"ae7f6dc2f194444fa01e76bd2623ad9e"},{url:"/marvel-lcg-randomizer/images/heroes/mc40_cardsingles_neenathurman.png",revision:"5f2573f9a8108ab75468bd5411f5256a"},{url:"/marvel-lcg-randomizer/images/heroes/mc41en_betsy_braddock.png",revision:"8592c4592c8a497fa0f03998421090a8"},{url:"/marvel-lcg-randomizer/images/heroes/mc41en_psylocke.png",revision:"90c1f1fe964c917a9a23930be798287a"},{url:"/marvel-lcg-randomizer/images/heroes/mc42en_card_angel.png",revision:"3e9df31fd3ea8145d784b32addefebbb"},{url:"/marvel-lcg-randomizer/images/heroes/mc42en_card_archangel.png",revision:"c57d5c8b50a2c86f3a2976bb52f5f8d9"},{url:"/marvel-lcg-randomizer/images/heroes/mc42en_card_warren_worthington_iii.png",revision:"0be64f8002d8f85d74065f4b682e4fac"},{url:"/marvel-lcg-randomizer/images/heroes/mc43_announce_cards_laurakinney.png",revision:"b09b0c7866bdbf8ac4fc8f82f891f92d"},{url:"/marvel-lcg-randomizer/images/heroes/mc43_announce_cards_x-23.png",revision:"5f8fa511987ba5e6684261f87152660c"},{url:"/marvel-lcg-randomizer/images/heroes/mc44_announce_cards_deadpool.png",revision:"ab2c22c2d9fc40002a9570a8719982c6"},{url:"/marvel-lcg-randomizer/images/heroes/mc44_announce_cards_wadewilson.png",revision:"3b2e9b67c84fe3c6fca12d7248d823b1"},{url:"/marvel-lcg-randomizer/images/missing.png",revision:"fdc1e4f0f52fb6e9f924a91d6526c86d"},{url:"/marvel-lcg-randomizer/images/missing2.png",revision:"afe4782616e946f97af06afcff9ff6d3"},{url:"/marvel-lcg-randomizer/images/modules/02037.jpg",revision:"a8e228235ebc2ddca6e55e352d69b09b"},{url:"/marvel-lcg-randomizer/images/modules/02041.jpg",revision:"e05ac005b8f231631d2f09e58dc1482e"},{url:"/marvel-lcg-randomizer/images/modules/02046.jpg",revision:"bb4c675beef673a5678e2b5d3f166dab"},{url:"/marvel-lcg-randomizer/images/modules/MC01en_109.jpg",revision:"4120ecfa4aad761f181dbda83c4a049a"},{url:"/marvel-lcg-randomizer/images/modules/MC01en_128.jpg",revision:"0dac654ddaa5fa620c56a7ec6d967002"},{url:"/marvel-lcg-randomizer/images/modules/MC01en_151.jpg",revision:"4e390c8c7504349c84d528e679dcae97"},{url:"/marvel-lcg-randomizer/images/modules/MC01en_180.jpg",revision:"ae21bf4514fb56846a413a97237f8658"},{url:"/marvel-lcg-randomizer/images/modules/MC01en_183.jpg",revision:"fa4290bf36b00215967118fc79b68d63"},{url:"/marvel-lcg-randomizer/images/modules/MC10en_145.jpg",revision:"9ab64cf0c6d15b679005c2c0c2a66c20"},{url:"/marvel-lcg-randomizer/images/modules/MC10en_148.jpg",revision:"f1263aaeceb58ae66636e2b7c6c44be8"},{url:"/marvel-lcg-randomizer/images/modules/MC10en_152.jpg",revision:"c59c057cc17b8829b9913a2c433525a3"},{url:"/marvel-lcg-randomizer/images/modules/MC10en_72.jpg",revision:"19689a8c4c3082184e35f76ee7efcaf6"},{url:"/marvel-lcg-randomizer/images/modules/MC11en_30.jpg",revision:"701a905aaded3022696e70190beccf1f"},{url:"/marvel-lcg-randomizer/images/modules/MC11en_40.jpg",revision:"20973be7ccd6432be97c0f36e3b4b567"},{url:"/marvel-lcg-randomizer/images/modules/MC11en_47.jpg",revision:"17d368e2726dc30514a9b64634e61b34"},{url:"/marvel-lcg-randomizer/images/modules/MC16en_117.jpg",revision:"903707caf1704989c156bf09bba9b811"},{url:"/marvel-lcg-randomizer/images/modules/MC16en_122.jpg",revision:"e34d5c5c6744eff77fa59b59c36fb49d"},{url:"/marvel-lcg-randomizer/images/modules/MC16en_131.jpg",revision:"f02c8c395341161f5c74cc356382647c"},{url:"/marvel-lcg-randomizer/images/modules/MC16en_135.jpg",revision:"80a70a52f16b89b3f8a72ebd24a4bea0"},{url:"/marvel-lcg-randomizer/images/modules/MC16en_138.jpg",revision:"83ab6404ec64e7cb88df1d26268219ff"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_125.jpg",revision:"bb908c4d3e8ecd85baeb39a6a6d6bfbe"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_129.jpg",revision:"2c5388cbfa7fae2d3e354c77ecab0b5c"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_152.jpg",revision:"792590f5cd66dffaa2d679928e1d330c"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_156.jpg",revision:"a7b234089c889f4d0636e9f0bd776d0f"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_177.jpg",revision:"9a317d223045bb39f06c5a2738e0ea93"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_85.jpg",revision:"8456de110902c900438a20c8dbadcab4"},{url:"/marvel-lcg-randomizer/images/modules/MC21en_89.jpg",revision:"d0153eb0f11a9f809a9b44c7834491f7"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_14.jpg",revision:"68fa88ce9b273a22eaaee3c92f3b1fb8"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_18.jpg",revision:"a1401481b11b83f05ea4ff148340ae8a"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_23.jpg",revision:"c76e9a373b278788424b404c1b213dec"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_33.png",revision:"dc857827cdb762361e2f439af00f479a"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_37.png",revision:"0674df955ac9a66ef4f40e913a58abbf"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_42.jpg",revision:"7b660baa998db323282487d3f2373d44"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_55.jpg",revision:"ae99b0d19fae08cc667eaf946983525d"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_60.jpg",revision:"7f5bd0b60707ef7fb592f7fba18c0331"},{url:"/marvel-lcg-randomizer/images/modules/MC24en_64.jpg",revision:"2e4b4b6a2edc13a25acad5c02c8dda19"},{url:"/marvel-lcg-randomizer/images/modules/black-tom-cassidy.jpg",revision:"ed860e81e641bf3f3be03787b755e720"},{url:"/marvel-lcg-randomizer/images/modules/city-in-chaos.png",revision:"e6e9e10e9eb3f324a8467015cb26e331"},{url:"/marvel-lcg-randomizer/images/modules/down-to-earth.png",revision:"fc0ef3509e458d9c92051d58fa3d96b9"},{url:"/marvel-lcg-randomizer/images/modules/exodus.jpg",revision:"20358c1b3572d012ca0d4026fea8f09a"},{url:"/marvel-lcg-randomizer/images/modules/extreme-measures.jpg",revision:"21c4b82b6121af27b3cd45bc80f42dfa"},{url:"/marvel-lcg-randomizer/images/modules/flight.jpg",revision:"c9b5e78262dbc380f9dd48e124422c73"},{url:"/marvel-lcg-randomizer/images/modules/gen_con_2020_ronan.jpg",revision:"d20d1b566329cdb9913ab47557931ad9"},{url:"/marvel-lcg-randomizer/images/modules/goblin-gear.png",revision:"343507495caaa396e8de73db45a68c11"},{url:"/marvel-lcg-randomizer/images/modules/guerrilla-tactics.png",revision:"dd4d7c5f8ea832420ee7413b191f171f"},{url:"/marvel-lcg-randomizer/images/modules/hope-summers.jpg",revision:"5a898161ed10744963dca886204fa0ec"},{url:"/marvel-lcg-randomizer/images/modules/marauders.jpg",revision:"ca5f70789135a3e9e2c8076a630207ec"},{url:"/marvel-lcg-randomizer/images/modules/mc02en_card_goblin-glider.jpg",revision:"33950639d6b074a9977ec36c109b3347"},{url:"/marvel-lcg-randomizer/images/modules/mc28_nova_cardsingles__armadillo.png",revision:"7c948640f10a43fa73e65fc986aa475d"},{url:"/marvel-lcg-randomizer/images/modules/mc29en_feedback_loop_36.png",revision:"c762e7f7a9299746186bb09dc69f6880"},{url:"/marvel-lcg-randomizer/images/modules/mc30_spider-ham_cardsingles__bora.png",revision:"488db3df46af3e5a9a8e354e02d6f167"},{url:"/marvel-lcg-randomizer/images/modules/mc31_spdr_isss.png",revision:"8dce39db6d06d8d9058b4f231e392e13"},{url:"/marvel-lcg-randomizer/images/modules/mc32_acolytes.png",revision:"e8213eb1b9a5abda403a9114ced0935e"},{url:"/marvel-lcg-randomizer/images/modules/mc32_brotherhood.png",revision:"3cc4ce2c5d28cfeb70e0b20f08f39e43"},{url:"/marvel-lcg-randomizer/images/modules/mc32_future_past.png",revision:"33f0bef40b3a8a81c0908dc9980bfc11"},{url:"/marvel-lcg-randomizer/images/modules/mc32_mystique.png",revision:"9f01565c988e5e1b24bb139a0c5c284a"},{url:"/marvel-lcg-randomizer/images/modules/mc32_sentinels.png",revision:"057e863cb2f142504eae543d20d092ec"},{url:"/marvel-lcg-randomizer/images/modules/mc32_zero_tolerance.png",revision:"b6ba47b3974bdbdce38a470d4e83cada"},{url:"/marvel-lcg-randomizer/images/modules/mc35_deathstrike.png",revision:"10398ae834bf98435ddad63f61b25189"},{url:"/marvel-lcg-randomizer/images/modules/mc36_shadow_king.png",revision:"32544026c37c6fd72aa06ce66130c55a"},{url:"/marvel-lcg-randomizer/images/modules/mc39_crime.png",revision:"c899de822bc60d0d595129418c482fb9"},{url:"/marvel-lcg-randomizer/images/modules/mc39_fantasy.png",revision:"2888385ade68886b2f200f4ee75255f4"},{url:"/marvel-lcg-randomizer/images/modules/mc39_horror.png",revision:"552e2ab731d6d54be4fdc951046b94a2"},{url:"/marvel-lcg-randomizer/images/modules/mc39_scifi.png",revision:"db84dc7b550d333c6fc0bf852e03cdba"},{url:"/marvel-lcg-randomizer/images/modules/mc39_sitcom.png",revision:"0525f61983d87ccfc563714164d59164"},{url:"/marvel-lcg-randomizer/images/modules/mc39_western.png",revision:"6a4fc585c23e1f63a40a21933752dc7d"},{url:"/marvel-lcg-randomizer/images/modules/military-grade.jpg",revision:"b90a8f90d7d62bbf967e73c904e3517c"},{url:"/marvel-lcg-randomizer/images/modules/mutant-insurrection.jpg",revision:"f67cd9a099d8e197ea489ca3f46b83db"},{url:"/marvel-lcg-randomizer/images/modules/mutant-slayers.jpg",revision:"0fb1d1489703bb8ab2ea2c735dd32608"},{url:"/marvel-lcg-randomizer/images/modules/nasty-boys.jpg",revision:"de6bced802fbbb6fe597950c2f778489"},{url:"/marvel-lcg-randomizer/images/modules/osborn-tech.png",revision:"50374831d0bfd6987ca0ca60c91c826d"},{url:"/marvel-lcg-randomizer/images/modules/personal-nightmare.png",revision:"871611d6be70dcf77e3b1bead4524085"},{url:"/marvel-lcg-randomizer/images/modules/power-stone.jpg",revision:"6ed3f3dbed0bbcb9fd72a68864935edb"},{url:"/marvel-lcg-randomizer/images/modules/reavers.jpg",revision:"8498f1400ee51adcb68fec2307fc1b23"},{url:"/marvel-lcg-randomizer/images/modules/ship-command.png",revision:"ae30a0114f0677931293d490d6e8c259"},{url:"/marvel-lcg-randomizer/images/modules/sinister-assault.png",revision:"8861328fb0d7190e95adba09926f37b9"},{url:"/marvel-lcg-randomizer/images/modules/super-strength.jpg",revision:"1ef1d87e91864e9bf80519c8bf9d4ba4"},{url:"/marvel-lcg-randomizer/images/modules/symbiotic-strength.png",revision:"c4f62bca19359773e9c7bc5379c14fd5"},{url:"/marvel-lcg-randomizer/images/modules/telepathy.jpg",revision:"c83c441c29d7b6ca45b3800673494ab6"},{url:"/marvel-lcg-randomizer/images/modules/whispers-of-paranoia.png",revision:"98ee89fa98ef38aa833d737142899c1f"},{url:"/marvel-lcg-randomizer/images/scenarios/02004.jpg",revision:"27da044dc89d0d04be6d5036dfb0a3a0"},{url:"/marvel-lcg-randomizer/images/scenarios/02017.jpg",revision:"a4248e5a81e343d2c5fc8f6cf1801604"},{url:"/marvel-lcg-randomizer/images/scenarios/MC01en_116A.jpg",revision:"2bd6575783430b418c1f70e046acdd33"},{url:"/marvel-lcg-randomizer/images/scenarios/MC01en_137A.jpg",revision:"c1cb154a0c0a94a6dcdfe742cf31d81f"},{url:"/marvel-lcg-randomizer/images/scenarios/MC01en_97A.jpg",revision:"0916ea021a82d706474eb53fc613d0a7"},{url:"/marvel-lcg-randomizer/images/scenarios/MC03en_1A.jpg",revision:"5473b13c925cb4235c7e9298241e7fcb"},{url:"/marvel-lcg-randomizer/images/scenarios/MC10en_112A.jpg",revision:"3a3feec3be2bc29b7211dcf63104f9bb"},{url:"/marvel-lcg-randomizer/images/scenarios/MC10en_128A.jpg",revision:"634ef0bfed9e3d30d22061147d7ec320"},{url:"/marvel-lcg-randomizer/images/scenarios/MC10en_61A.jpg",revision:"417aaaa4f0d07cdaef9d2f66b536d76c"},{url:"/marvel-lcg-randomizer/images/scenarios/MC10en_79A.jpg",revision:"e24bf631187ff144df927798778bf0f4"},{url:"/marvel-lcg-randomizer/images/scenarios/MC10en_96A.jpg",revision:"98d4344b0956df932b72e4edc7a00fda"},{url:"/marvel-lcg-randomizer/images/scenarios/MC11en_7A.jpg",revision:"d6817c0b0150a6c9f2c82c5de66ca7b1"},{url:"/marvel-lcg-randomizer/images/scenarios/MC16en_106A.jpg",revision:"99c688cee2262d66237ac1b634db46f7"},{url:"/marvel-lcg-randomizer/images/scenarios/MC16en_61A.jpg",revision:"7555447d56d22dd3b7bbeaa68a785fe9"},{url:"/marvel-lcg-randomizer/images/scenarios/MC16en_73A.jpg",revision:"59d9263699dcde292c0967dc428ef09e"},{url:"/marvel-lcg-randomizer/images/scenarios/MC16en_82A.jpg",revision:"55cb76fd319e513443a379218495e4b7"},{url:"/marvel-lcg-randomizer/images/scenarios/MC16en_91A.jpg",revision:"a29ead3bac67bd7020a040b899482c0e"},{url:"/marvel-lcg-randomizer/images/scenarios/MC21en_114A.jpg",revision:"8a1d48a35211bc96f2a2bce910f652c4"},{url:"/marvel-lcg-randomizer/images/scenarios/MC21en_138A.jpg",revision:"a6de030db4ed13dcf5b49672ac5fb07e"},{url:"/marvel-lcg-randomizer/images/scenarios/MC21en_165A.jpg",revision:"390f08cd66bf01f81fdc37f032626727"},{url:"/marvel-lcg-randomizer/images/scenarios/MC21en_74A.jpg",revision:"2b4105ab4d696cd6a5e67b2ef2237776"},{url:"/marvel-lcg-randomizer/images/scenarios/MC21en_98A.jpg",revision:"bf2f4b28c783a66d2309f8cd4cfc314c"},{url:"/marvel-lcg-randomizer/images/scenarios/MC24en_33.png",revision:"dc857827cdb762361e2f439af00f479a"},{url:"/marvel-lcg-randomizer/images/scenarios/MC24en_37.png",revision:"0674df955ac9a66ef4f40e913a58abbf"},{url:"/marvel-lcg-randomizer/images/scenarios/MC24en_4A.png",revision:"406e543564f85b026313f59ef7111544"},{url:"/marvel-lcg-randomizer/images/scenarios/juggernaut.jpg",revision:"ce9acbc89c0cea0388925d1b75bcc3a8"},{url:"/marvel-lcg-randomizer/images/scenarios/magneto-ally.png",revision:"6b72f15c8db02de8c966d0489d7cb107"},{url:"/marvel-lcg-randomizer/images/scenarios/mc02en_card_hostile-takeover.png",revision:"e4bea7d399a0400947ba22fe6ae5c6c4"},{url:"/marvel-lcg-randomizer/images/scenarios/mc03en_breakout.png",revision:"c507b935248ed5411331a5f9001ffc7f"},{url:"/marvel-lcg-randomizer/images/scenarios/mc32_magneto.png",revision:"7320615b2149b0cdda4563d7b821ffcb"},{url:"/marvel-lcg-randomizer/images/scenarios/mc32_mansion_attack.png",revision:"06692149704a0f160015d3b8afb2e485"},{url:"/marvel-lcg-randomizer/images/scenarios/mc32_master_mold.png",revision:"ef13c8541034911306a5baae744b343b"},{url:"/marvel-lcg-randomizer/images/scenarios/mc32_project_wideawake.png",revision:"7f4f52593a7745ac5dd28561e14d725c"},{url:"/marvel-lcg-randomizer/images/scenarios/mc32_sabretooth.png",revision:"5e497494ba1950620de8385388f8a1e4"},{url:"/marvel-lcg-randomizer/images/scenarios/mc39_magog.png",revision:"33d517af91164a0c9788d5c4f14a5c62"},{url:"/marvel-lcg-randomizer/images/scenarios/mc39_mojo.png",revision:"b943c36e3cf5038aaa37a0d8f137dd0c"},{url:"/marvel-lcg-randomizer/images/scenarios/mc39_spiral.png",revision:"1dcb2b78e8d87f3ff2da31bdb6046843"},{url:"/marvel-lcg-randomizer/images/scenarios/mister-sinister.jpg",revision:"cb02f011ecc4542e62a8492bec56ca1b"},{url:"/marvel-lcg-randomizer/images/scenarios/morlock-siege.jpg",revision:"118049656fc8067cfdfbaeab522be733"},{url:"/marvel-lcg-randomizer/images/scenarios/mysterio.png",revision:"85b90f8af6842c858b49f65ce58ad1c6"},{url:"/marvel-lcg-randomizer/images/scenarios/on-the-run.jpg",revision:"97534e20c17d68f8f164fc7e35dcc8bb"},{url:"/marvel-lcg-randomizer/images/scenarios/sandman.png",revision:"d1dbecfca3a7313b9dd68ffa885b3923"},{url:"/marvel-lcg-randomizer/images/scenarios/sinister-six.png",revision:"54e8401e192feeccd65a4320acbc54b1"},{url:"/marvel-lcg-randomizer/images/scenarios/stryfe.jpg",revision:"96c530052e385d8de58476945e93dd79"},{url:"/marvel-lcg-randomizer/images/scenarios/venom.png",revision:"b7fef5ee49a03d476f852862e22d3afe"},{url:"/marvel-lcg-randomizer/img/logo.4189558d.jpg",revision:null},{url:"/marvel-lcg-randomizer/index.html",revision:"cb2e819fa6486fff6b4f457fd407ec18"},{url:"/marvel-lcg-randomizer/js/app.0ef1efde.js",revision:null},{url:"/marvel-lcg-randomizer/js/chunk-vendors.d84d6c53.js",revision:null},{url:"/marvel-lcg-randomizer/manifest.json",revision:"5301d72b2b3c76ff6ee273becefbc018"},{url:"/marvel-lcg-randomizer/marvel-lcg-randomizer.webmanifest",revision:"08f78af8d52f58af07b560311dbb861b"},{url:"/marvel-lcg-randomizer/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
