(function(e){function a(a){for(var t,s,o=a[0],l=a[1],c=a[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],t=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(t=!1)}t&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var t={},r={app:0},i=[];function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(n,t,function(a){return e[a]}.bind(null,t));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/marvel-lcg-randomizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("85ec"),r=n.n(t);r.a},"1af3":function(e,a,n){"use strict";var t=n("8b86"),r=n.n(t);r.a},"2cc4":function(e,a,n){"use strict";var t=n("34da"),r=n.n(t);r.a},"34da":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app"},[e._m(0),n("button",{staticClass:"randomize-button",on:{click:e.randomize}},[e._v("Randomize")]),n("PlayerSelector",{model:{value:e.numberOfPlayer,callback:function(a){e.numberOfPlayer=a},expression:"numberOfPlayer"}}),n("PackSelector",{attrs:{packs:e.data.packs},model:{value:e.selectedPacks,callback:function(a){e.selectedPacks=a},expression:"selectedPacks"}}),n("DifficultySelector",{attrs:{difficulties:e.data.difficulties},model:{value:e.randomizationOptions.selectedDifficulties,callback:function(a){e.$set(e.randomizationOptions,"selectedDifficulties",a)},expression:"randomizationOptions.selectedDifficulties"}}),n("RandomizationOptions",{model:{value:e.randomizationOptions,callback:function(a){e.randomizationOptions=a},expression:"randomizationOptions"}}),e.randomizationOptions.scenario?n("Scenario",{attrs:{scenario:e.selectedScenario}}):e._e(),e.randomizationOptions.decks?n("DeckList",{attrs:{"available-decks":e.selectedDecks,"number-of-player":e.numberOfPlayer}}):e._e(),n("Changelog"),n("Contribute")],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h1",[t("img",{staticClass:"logo",attrs:{src:n("b640"),alt:"Marvel Champions"}})])}],s=(n("4de4"),n("c975"),n("d81d"),[{name:"Rhino - The Break In!",img:"images/scenarios/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"images/scenarios/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"images/scenarios/MC01en_137A.jpg",pack:"Core Set"},{name:"Green Goblin - Risky Business",img:"images/scenarios/02004.jpg",pack:"Green Goblin"},{name:"Green Goblin - Mutagen Formula",img:"images/scenarios/02017.jpg",pack:"Green Goblin"},{name:"Wrecking Crew - Breakout",img:"images/scenarios/MC03en_1A.jpg",pack:"Wrecking Crew",decks:[{name:"Bulldozer",minModules:0},{name:"Piledriver",minModules:0},{name:"Thunderball",minModules:0},{name:"Wrecker",minModules:0}],difficulties:[["Standard","Standard (All Villains A)"],["Expert","Bulldozer A, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball B, Wrecker A"],["Expert","Expert (All Villains B)"],["Nightmare","Nightmare (All Villains A+B)"]]},{name:"Crossbones - Attack on Mount Athena",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_61A.jpg"},{name:"Absorbing Man - None Shall Pass",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_79A.jpg"},{name:"Taskmaster - Hunting Down Heroes",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_96A.jpg"},{name:"Zola - The Island of Dr. Zola",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_112A.jpg"},{name:"Red Skull - The Rise of Red Skull",pack:"The Rise of Red Skull",img:"images/scenarios/MC10en_128A.jpg"},{name:"Kang - Kang's Arrival",pack:"The Once and Future Kang",img:"images/scenarios/MC11en_7A.jpg"},{name:"Brotherhood of Badoon",pack:"Galaxy's Most Wanted",img:"images/scenarios/MC16en_61A.jpg"},{name:"Collector 1 – Infiltrate the Museum",pack:"Galaxy's Most Wanted",img:"images/scenarios/MC16en_73A.jpg"},{name:"Collector 2 – Escape the Museum",pack:"Galaxy's Most Wanted",img:"images/scenarios/MC16en_82A.jpg"},{name:"Nebula",pack:"Galaxy's Most Wanted",img:"images/scenarios/MC16en_91A.jpg"},{name:"Ronan",pack:"Galaxy's Most Wanted",img:"images/scenarios/MC16en_106A.jpg"}]),o=[{name:"Bomb Scare",img:"images/modules/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"images/modules/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"images/modules/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"images/modules/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"images/modules/MC01en_183.jpg",pack:"Core Set"},{name:"Goblin Gimmicks",img:"images/modules/mc02en_card_goblin-glider.jpg",pack:"Green Goblin"},{name:"A Mess of Things",img:"images/modules/02037.jpg",pack:"Green Goblin"},{name:"Power Drain",img:"images/modules/02041.jpg",pack:"Green Goblin"},{name:"Running Interference",img:"images/modules/02046.jpg",pack:"Green Goblin"},{name:"Weapon Master",img:"images/modules/MC10en_148.jpg",pack:"The Rise of Red Skull"},{name:"Experimental Weapons",img:"images/modules/MC10en_72.jpg",pack:"The Rise of Red Skull"},{name:"Hydra Assault",img:"images/modules/MC10en_145.jpg",pack:"The Rise of Red Skull"},{name:"Hydra Patrol",img:"images/modules/MC10en_152.jpg",pack:"The Rise of Red Skull"},{name:"Anachronauts",img:"images/modules/MC11en_40.jpg",pack:"The Once and Future Kang"},{name:"Master of Time",img:"images/modules/MC11en_47.jpg",pack:"The Once and Future Kang"},{name:"Temporal",img:"images/modules/MC11en_30.jpg",pack:"The Once and Future Kang"},{name:"Kree Fanatic",img:"images/modules/gen_con_2020_ronan.jpg",pack:"Ronan the Accuser (Print and Play)"},{name:"Band of Badoon",img:"images/modules/MC16en_117.jpg",pack:"Galaxy's Most Wanted"},{name:"Galactic Artifacts",img:"images/modules/MC16en_122.jpg",pack:"Galaxy's Most Wanted"},{name:"Kree Militants",img:"images/modules/MC16en_131.jpg",pack:"Galaxy's Most Wanted"},{name:"Menagerie Medley",img:"images/modules/MC16en_135.jpg",pack:"Galaxy's Most Wanted"},{name:"Space Pirates",img:"images/modules/MC16en_138.jpg",pack:"Galaxy's Most Wanted"}],l=[{hero:"Spider-man",heroImg:"images/heroes/mc01en_card_spider-man.png",alterEgo:"Peter Parker",alterEgoImg:"images/heroes/mc01en_card_peter-parker.png",pack:"Core Set"},{hero:"Captain Marvel",heroImg:"images/heroes/mc01en_card_captain-marvel.png",alterEgo:"Carol Danvers",alterEgoImg:"images/heroes/mc01en_card_carol-danvers.png",pack:"Core Set"},{hero:"She-Hulk",heroImg:"images/heroes/mc01en_card_she-hulk.png",alterEgo:"Jennifer Walters",alterEgoImg:"images/heroes/mc01en_card_jennifer-walters.png",pack:"Core Set"},{hero:"Iron Man",heroImg:"images/heroes/mc01en_iron-man.png",alterEgo:"Tony Stark",alterEgoImg:"images/heroes/mc01en_card_tony-stark.png",pack:"Core Set"},{hero:"Black Panther",heroImg:"images/heroes/mc01en_card_black-panther.png",alterEgo:"T'Challa",alterEgoImg:"images/heroes/mc01en_card_tchalla.png",pack:"Core Set"},{hero:"Captain America",heroImg:"images/heroes/mc04en_card_captain-america.png",alterEgo:"Steeve Rogers",alterEgoImg:"images/heroes/mc04en_card_steve-rogers.png",pack:"Captain America"},{hero:"Ms. Marvel",heroImg:"images/heroes/mc05en_ms-marvel.png",alterEgo:"Kamala Khan",alterEgoImg:"images/heroes/mc05en_kamala-khan.png",pack:"Ms. Marvel"},{hero:"Thor",heroImg:"images/heroes/mc06en_a1_thor.png",alterEgo:"Odinson",alterEgoImg:"images/heroes/mc06en_a1_odinson.png",pack:"Thor"},{hero:"Black Widow",heroImg:"images/heroes/mc07en_black-widow.png",alterEgo:"Natasha Romanoff",alterEgoImg:"images/heroes/mc07en_natasha-romanoff.png",pack:"Black Widow"},{hero:"Doctor Strange",heroImg:"images/heroes/mc08en_doctor-strange.png",alterEgo:"Stephen Strange",alterEgoImg:"images/heroes/mc08en_stephen-strange.png",pack:"Doctor Strange"},{hero:"Hulk",heroImg:"images/heroes/mc09en-hulk.png",alterEgo:"Bruce Banner",alterEgoImg:"images/heroes/mc09en_bruce-banner.png",pack:"Hulk"},{hero:"Hawkeye",heroImg:"images/heroes/mc10en_hawkeye.png",alterEgo:"Clint Barton",alterEgoImg:"images/heroes/mc10en_clint-barton.png",pack:"The Rise of Red Skull"},{hero:"Spider-woman",heroImg:"images/heroes/mc10en_spider-woman.png",alterEgo:"Jessica Drew",alterEgoImg:"images/heroes/mc10en_jessica-drew.png",pack:"The Rise of Red Skull",numberOfAspects:2},{hero:"Ant-Man",heroImg:"images/heroes/mc11en_ant-man.png",alterEgo:"Scott Lang",alterEgoImg:"images/heroes/mc11en_scott-lang.png",pack:"Ant-Man"},{hero:"Wasp",heroImg:"images/heroes/mc13en_wasp.png",alterEgo:"Nadia Van Dyne",alterEgoImg:"images/heroes/mc13en_nadia-van-dyne.png",pack:"Wasp"},{hero:"Quicksilver",heroImg:"images/heroes/mc14en_quicksilver-hero.png",alterEgo:"Pietro Maximoff",alterEgoImg:"images/heroes/mc14en_pietro-maximoff-alter-ego.png",pack:"Quicksilver"},{hero:"Scarlet Witch",heroImg:"images/heroes/mc15en_scarlet-witch.png",alterEgo:"Wanda Maximoff",alterEgoImg:"images/heroes/mc15en_wanda-maximoff.png",pack:"Scarlet Witch"},{hero:"Groot",heroImg:"images/heroes/mc16en_groot-hero.png",alterEgo:"Groot",alterEgoImg:"images/heroes/mc16en_groot-alter-ego.png",pack:"Galaxy's Most Wanted"},{hero:"Rocket Racoon",heroImg:"images/heroes/mc16en_rocket-racoon-hero.png",alterEgo:"Rocket Racoon",alterEgoImg:"images/heroes/mc16en_rocket-racoon-alter-ego.png",pack:"Galaxy's Most Wanted"},{hero:"Star-Lord",heroImg:"images/heroes/mc17en_star-lord-hero.png",alterEgo:"Peter Quill",alterEgoImg:"images/heroes/mc17en_peter-quill.png",pack:"Star-Lord"},{hero:"Gamora",heroImg:"images/heroes/mc18en_gamora-hero.png",alterEgo:"Gamora",alterEgoImg:"images/heroes/mc18en_gamora-alter-ego.png",pack:"Gamora"}],c=[{name:"Aggression",img:"images/aspects/MC01en_55.jpg",packs:["Core Set","Thor"]},{name:"Justice",img:"images/aspects/MC01en_62.jpg",packs:["Core Set","Black widow"]},{name:"Leadership",img:"images/aspects/MC01en_72.jpg",packs:["Core Set","Captain America"]},{name:"Protection",img:"images/aspects/MC01en_79.jpg",packs:["Core Set","Ms. Marvel","Doctor Strange"]}],d=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"player-selector panel"},[n("p",{staticClass:"panel-insert"},[e._v("Select the number of players")]),n("div",{staticClass:"player-buttons"},[n("button",{attrs:{disabled:1===e.value},on:{click:function(a){return e.$emit("input",1)}}},[e._v("Solo")]),n("button",{attrs:{disabled:2===e.value},on:{click:function(a){return e.$emit("input",2)}}},[e._v("Duo")]),n("button",{attrs:{disabled:3===e.value},on:{click:function(a){return e.$emit("input",3)}}},[e._v("3 players")]),n("button",{attrs:{disabled:4===e.value},on:{click:function(a){return e.$emit("input",4)}}},[e._v("4 players")])])])},u=[],m={name:"PlayerSelector",props:{value:{default:1}},methods:{addPlayer:function(){this.$emit("input",Math.min(this.value+1,4))},removePlayer:function(){this.$emit("input",Math.max(this.value-1,1))}}},g=m,p=(n("84e3"),n("2877")),h=Object(p["a"])(g,d,u,!1,null,"438c5f32",null),f=h.exports,v=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Custom Options ")]),e.shown?n("div",[n("div",[n("button",{attrs:{disabled:e.value.additionalModules<=0},on:{click:function(a){e.additionalModulesChange((e.value.additionalModules||0)-1)}}},[e._v("-")]),e._v(" "+e._s(e.value.additionalModules||0)+" "),n("button",{on:{click:function(a){e.additionalModulesChange(parseInt(e.value.additionalModules||0)+1)}}},[e._v("+")]),e._v(" Extra Modules ")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.scenario,expression:"value.scenario"}],attrs:{type:"checkbox",name:"scenario",id:"scenario"},domProps:{checked:Array.isArray(e.value.scenario)?e._i(e.value.scenario,null)>-1:e.value.scenario},on:{change:function(a){var n=e.value.scenario,t=a.target,r=!!t.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);t.checked?s<0&&e.$set(e.value,"scenario",n.concat([i])):s>-1&&e.$set(e.value,"scenario",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.value,"scenario",r)}}}),e._v(" Generate Scenario ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.decks,expression:"value.decks"}],attrs:{type:"checkbox",name:"scenario",id:"decks"},domProps:{checked:Array.isArray(e.value.decks)?e._i(e.value.decks,null)>-1:e.value.decks},on:{change:function(a){var n=e.value.decks,t=a.target,r=!!t.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);t.checked?s<0&&e.$set(e.value,"decks",n.concat([i])):s>-1&&e.$set(e.value,"decks",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.value,"decks",r)}}}),e._v(" Generate Player Decks ")])]),n("div",{staticClass:"panel-insert-content",on:{click:function(a){e.shown=!e.shown}}},[e._v(" Hide Options ")])]):n("div",[n("div",{staticClass:"panel-insert-content",on:{click:function(a){e.shown=!e.shown}}},[e._v(" Show Options ")])])])},_=[],k=(n("a4d3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function b(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function C(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?b(Object(n),!0).forEach((function(a){Object(k["a"])(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var y={name:"RandomizationOptions",props:{value:{default:{}}},data:function(){return{shown:!1}},methods:{additionalModulesChange:function(e){var a=C({},this.value);a.additionalModules=e,this.$emit("input",a)}}},A=y,M=Object(p["a"])(A,v,_,!1,null,"26453d6c",null),S=M.exports,O=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"packs-selector panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Selected packs ")]),e.shown?e._e():n("div",{staticClass:"packs-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?n("div",{staticClass:"packs"},e._l(e.packs,(function(a,t){return n("div",{key:t,staticClass:"pack-type-column"},[n("h3",[e._v(e._s(t))]),e._l(a,(function(a){return n("label",{key:a},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(a)>=0},on:{input:function(n){return e.togglePack(a,n.target.checked)}}}),e._v(e._s(a)+" ")])}))],2)})),0):e._e(),n("div",{staticClass:"toggle"},[n("div",{staticClass:"panel-insert-content",on:{click:function(a){e.shown=!e.shown}}},[e.shown?n("span",[e._v("Finish Selection")]):n("span",[e._v("Add/Remove Packs")])])])])},w=[],E=(n("fb6a"),n("a434"),{name:"PackSelector",props:{value:{default:["Core Set"]},packs:{default:["Core Set"]}},data:function(){return{shown:!1}},methods:{togglePack:function(e,a){var n=this.value.slice(0);a?n.push(e):n.splice(n.indexOf(e),1),this.$emit("input",n)}}}),j=E,P=(n("6048"),Object(p["a"])(j,O,w,!1,null,"2c18682e",null)),x=P.exports,B=function(){var e=this,a=e.$createElement,n=e._self._c||a;return e.scenario?n("div",{staticClass:"scenario-randomizer panel"},[n("div",{staticClass:"title panel-insert",on:{click:function(a){e.shown=!e.shown}}},[e._v("Scenario")]),e.shown?n("div",{staticClass:"content"},[n("div",[n("div",{staticClass:"main-scenario"},[n("img",{attrs:{src:e.scenario.scenario.img,alt:e.scenario.scenario.name}}),n("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(e.scenario.scenario.name)+"("+e._s(e.scenario.scenario.pack)+") ")])]),e._l(e.scenario.modules,(function(a,t){var r=a.deck,i=a.modules;return n("div",{key:t},[i.length>0?n("div",{staticClass:"deck"},[e.scenario.modules.length>1?n("div",{staticClass:"deck-name"},[e._v("Deck "+e._s(r.name))]):e._e(),n("div",{staticClass:"modules"},e._l(i,(function(a,t){return n("div",{key:t,staticClass:"module"},[n("img",{attrs:{src:a.img,alt:a.name}}),n("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(a.name)+"("+e._s(a.pack)+") ")])])})),0)]):e._e()])}))],2),n("div",{staticClass:"difficulty panel-insert-content"},[e._v(" Difficulty: "),n("span",{staticClass:"difficulty-value"},[e._v(" "+e._s(e.scenario.difficulty)+" ")])])]):e._e()]):e._e()},I=[],T={name:"Scenario.vue",props:{scenario:{required:!0}},data:function(){return{shown:!0}}},z=T,D=(n("1af3"),Object(p["a"])(z,B,I,!1,null,"2766e661",null)),R=D.exports,W=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-randomizer panel"},[n("div",{staticClass:"title panel-insert",on:{click:function(a){e.shown=!e.shown}}},[e._v("Players' Deck")]),e.availableDecks.length<e.numberOfPlayer?n("div",{staticClass:"warning"},[e._v(" Not enough Heroes for all the players. ")]):e._e(),e.shown?n("div",{staticClass:"decks"},e._l(e.selectedDecks,(function(a,t){var r=a.hero,i=a.aspects;return n("div",{key:t,staticClass:"hero-deck"},[n("h2",{staticClass:"panel-insert-content"},[e._v("Player "+e._s(t+1)+" "),0===t?n("span",[e._v("(First Player)")]):e._e()]),n("div",{staticClass:"cards"},[n("div",{staticClass:"card"},[n("img",{attrs:{src:r.alterEgoImg,alt:r.alterEgo}})]),n("div",{staticClass:"card"},[n("img",{attrs:{src:r.heroImg,alt:r.hero}})]),e._l(i,(function(e){return n("div",{key:e.name,staticClass:"card"},[n("img",{attrs:{src:e.img,alt:e.name}})])}))],2),n("div",{staticClass:"name panel-insert-content"},[e._v(" "+e._s(r.alterEgo)+" / "+e._s(r.hero)+"("+e._s(r.pack)+") + "+e._s(i.map((function(e){return e.name})).join(" + "))+" ")])])})),0):e._e()])},G=[],$={name:"DeckList",props:{numberOfPlayer:{default:1},availableDecks:{default:[],required:!0}},data:function(){return{shown:!0}},computed:{selectedDecks:function(){return this.availableDecks.slice(0,this.numberOfPlayer)}}},H=$,N=(n("7a34"),Object(p["a"])(H,W,G,!1,null,"35d2566f",null)),F=N.exports,K=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog panel"},[n("div",{staticClass:"panel-insert",on:{click:function(a){e.shown=!e.shown}}},[e._v("Changelog")]),e.shown?n("div",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12)]):e._e()])},L=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On june 12th 2021")]),n("ul",[n("li",[e._v("Add Star-Lord")]),n("li",[e._v("Add Gamora")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On april 6th 2021")]),n("ul",[n("li",[e._v("Add Galaxy's Most Wanted")]),n("li",[e._v("Add Hawkeye alter ego")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On march 3rd 2021")]),n("ul",[n("li",[e._v("Add Scarlet Witch")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On february 3rd 2021")]),n("ul",[n("li",[e._v("Add Quicksilver")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On january 21st 2021")]),n("ul",[n("li",[e._v("Add Wasp")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On january 18th 2021")]),n("ul",[n("li",[e._v("Add Ant-Man")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On october 9th 2020")]),n("ul",[n("li",[e._v("Add The Rise of Red Skull and Kang scenarios and modules")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On may 24th 2020")]),n("ul",[n("li",[e._v("Add Hulk, Hawkeye(missing the alter-ego visual) and Spider-woman")]),n("li",[e._v("Add support for multiple aspects heroes (Spider-woman / Jessica Drew - The Rise of Red Skull)")]),n("li",[e._v("Fix difficulties")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On february 16th 2020")]),n("ul",[n("li",[e._v("Add Black Widow and Doctor Strange")]),n("li",[e._v("Update Green Goblin and Wrecking Crew pictures")]),n("li",[e._v("Add contribute note at the bottom of the page")]),n("li",[e._v("Add first player indicator in deck list")]),n("li",[e._v("Add custom options to generate only scenario or decks")]),n("li",[e._v("Add difficulty selector")]),n("li",[e._v("Add Wrecking Crew custom difficulties")]),n("li",[e._v("Add Nightmare difficulty in selectable difficulties (All 3 levels of a villains)")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On january 2nd 2020")]),n("ul",[n("li",[e._v("Add offline availability")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 23rd 2019")]),n("ul",[n("li",[e._v("Refactored the randomization for a bit more of future proofing")]),n("li",[e._v("Add support for first customization option: Extra modules")])]),n("h3",[e._v("On december 15th 2019")]),n("ul",[n("li",[e._v("Add saving of the selected packs you own in your browser")]),n("li",[e._v("Add the changelog list")]),n("li",[e._v("Display pack selection by categories (Heroes, Modules, Scenarios)")]),n("li",[e._v("A bit of redesign")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 13th 2019")]),n("ul",[n("li",[e._v("Add Support for Multiple packs")]),n("li",[e._v("Add scenarios and modules from Green Goblins and Wrecking Crew")]),n("li",[e._v("Add Heroes Ms. Marvel, Captain America and Thor")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 12th 2019 (and before)")]),n("ul",[n("li",[e._v("Add Scenario randomization")]),n("li",[e._v("Add Hero randomization")]),n("li",[e._v("Add Number of player selection")])])])}],J={name:"Changelog",data:function(){return{shown:!0}}},q=J,Q=(n("2cc4"),Object(p["a"])(q,K,L,!1,null,"37276a6a",null)),U=Q.exports,V=n("2909"),Z=n("3835"),X=n("d4ec"),Y=n("bee2");function ee(e){for(var a=e.slice(0),n=a.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=[a[t],a[n]];a[n]=r[0],a[t]=r[1]}return a}var ae=function(){function e(){Object(X["a"])(this,e)}return Object(Y["a"])(e,[{key:"randomizeScenario",value:function(e,a,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{additionalModules:0},r=t.additionalModules,i=void 0===r?0:r,s=ee(e).shift(),o=s.decks||[{name:"encounter"}],l=ee(a),c=o.map((function(e){var a=(void 0!==e.minModules?e.minModules:1)+i;return{deck:e,modules:l.splice(0,a)}})),d=(s.difficulties||[]).filter((function(e){var a=Object(Z["a"])(e,1),t=a[0];return n.indexOf(t.toLowerCase())>=0})).map((function(e){var a=Object(Z["a"])(e,2),n=a[1];return n})),u=d.length?d:n,m=u[Math.floor(Math.random()*u.length)]||"No difficulty available";return{scenario:s,modules:c,difficulty:m}}},{key:"randomizeHeroes",value:function(e,a){var n=ee(e),t=ee(a);t.push.apply(t,Object(V["a"])(ee(a)));for(var r=0;r<t.length-2;r++)if(t[r]===t[r+1]){var i=[t[r+2],t[r+1]];t[r+1]=i[0],t[r+2]=i[1]}for(var s=[],o=0;o<Math.min(4,n.length);o++){for(var l=[],c=n[o].numberOfAspects||1,d=0;d<c;d++)l.push(t.shift());s.push({hero:n[o],aspects:l})}return s}}]),e}(),ne=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[e._v(" Fork this project or contribute on "),n("a",{attrs:{href:"https://github.com/Naouak/marvel-lcg-randomizer",target:"_blank"}},[e._v("Github")]),e._v(". ")])}],re={name:"Contribute"},ie=re,se=Object(p["a"])(ie,ne,te,!1,null,"1fec2e7b",null),oe=se.exports,le=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"difficulties-selector panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Selected difficulties ")]),e.shown?e._e():n("div",{staticClass:"difficulties-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?n("div",{staticClass:"difficulties"},[n("h3",[e._v("Difficulties")]),e._l(e.difficulties,(function(a){return n("div",{key:a,staticClass:"difficulty-type-column"},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(a)>=0},on:{input:function(n){return e.toggleDifficulty(a,n.target.checked)}}}),e._v(e._s(a)+" ")])])}))],2):e._e(),n("div",{staticClass:"toggle"},[n("div",{staticClass:"panel-insert-content",on:{click:function(a){e.shown=!e.shown}}},[e.shown?n("span",[e._v("Finish Selection")]):n("span",[e._v("Select difficulties")])])])])},ce=[],de={name:"DifficultySelector",props:{value:{default:["Standard","Expert"]},difficulties:{default:["Standard","Expert"]}},data:function(){return{shown:!1}},methods:{toggleDifficulty:function(e,a){var n=this.value.slice(0);a?n.push(e):n.splice(n.indexOf(e),1),this.$emit("input",n)}}},ue=de,me=(n("d546"),Object(p["a"])(ue,le,ce,!1,null,"10bfa2b9",null)),ge=me.exports,pe=["standard","expert","nightmare"],he=window.localStorage,fe={Heroes:l.map((function(e){return e.pack})).filter((function(e,a,n){return n.indexOf(e)===a})),Scenarios:s.map((function(e){return e.pack})).filter((function(e,a,n){return n.indexOf(e)===a})),Modules:o.map((function(e){return e.pack})).filter((function(e,a,n){return n.indexOf(e)===a}))},ve=new ae,_e=null;try{_e=JSON.parse(he.getItem("selectedPacks"))||["Core Set"]}catch(Me){_e=["Core Set"],he.removeItem("selectedPacks")}var ke={name:"app",data:function(){return{data:{scenarios:s,modules:o,heroes:l,aspects:c,packs:fe,difficulties:pe},selectedPacks:_e,selectedScenario:null,selectedDecks:[],numberOfPlayer:1,randomizationOptions:{scenario:1,decks:1,selectedDifficulties:["standard","expert"]}}},watch:{selectedPacks:function(){he.setItem("selectedPacks",JSON.stringify(this.selectedPacks)),this.randomize()},randomizationOptions:{handler:function(){this.randomize()},deep:!0}},created:function(){this.randomize()},computed:{availableScenarios:function(){var e=this;return this.data.scenarios.filter((function(a){return e.selectedPacks.indexOf(a.pack)>=0}))},availableModules:function(){var e=this;return this.data.modules.filter((function(a){return e.selectedPacks.indexOf(a.pack)>=0}))},availableHeroes:function(){var e=this;return this.data.heroes.filter((function(a){return e.selectedPacks.indexOf(a.pack)>=0}))},availableDifficulties:function(){var e=this;return this.data.difficulties.filter((function(a){return e.randomizationOptions.selectedDifficulties.indexOf(a)>=0}))}},methods:{randomize:function(){this.selectedScenario=ve.randomizeScenario(this.availableScenarios,this.availableModules,this.availableDifficulties,this.randomizationOptions),this.selectedDecks=ve.randomizeHeroes(this.availableHeroes,this.data.aspects)}},components:{DifficultySelector:ge,Contribute:oe,Changelog:U,PackSelector:x,PlayerSelector:f,DeckList:F,Scenario:R,RandomizationOptions:S}},be=ke,Ce=(n("034f"),Object(p["a"])(be,r,i,!1,null,null,null)),ye=Ce.exports,Ae=n("9483");Object(Ae["a"])("".concat("/marvel-lcg-randomizer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(ye)}}).$mount("#app")},6048:function(e,a,n){"use strict";var t=n("6e31"),r=n.n(t);r.a},"6e31":function(e,a,n){},"7a34":function(e,a,n){"use strict";var t=n("cb69"),r=n.n(t);r.a},"7ae1":function(e,a,n){},"84e3":function(e,a,n){"use strict";var t=n("e421"),r=n.n(t);r.a},"85ec":function(e,a,n){},"8b86":function(e,a,n){},b640:function(e,a,n){e.exports=n.p+"img/logo.7184bee2.jpg"},cb69:function(e,a,n){},d546:function(e,a,n){"use strict";var t=n("7ae1"),r=n.n(t);r.a},e421:function(e,a,n){}});
//# sourceMappingURL=app.d6028328.js.map