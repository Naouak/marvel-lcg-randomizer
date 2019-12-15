<template>
    <div class="hero-randomizer panel">
        <div class="title panel-insert" @click="shown=!shown">Players' Deck</div>

        <div class="warning" v-if="heroes.length < numberOfPlayer">
            Not enough Heroes for all the players.
        </div>

        <div class="decks" v-if="shown">
            <div class="hero-deck" :key="index" v-for="({hero, aspect}, index) in selectedDecks">
                <h2 class="panel-insert-content">Player {{index+1}}</h2>
                <div class="cards">
                    <img :src="hero.alterEgoImg" :alt="hero.alterEgo" />
                    <img :src="hero.heroImg" :alt="hero.hero" />
                    <img :src="aspect.img" :alt="aspect.name">
                </div>
                <div class="name panel-insert-content">
                    {{hero.alterEgo}} / {{hero.hero}}({{hero.pack}}) + {{aspect.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {shuffleArray} from "@/helpers";

    export default {
        name: "HeroRandomizer",

        props: {
            numberOfPlayer: {
                default: 1,
            },
            heroes: {
                default: () => [],
            },
            aspects: {
                default: () => ['Justice', 'LeaderShip', 'Aggression', 'Protection']
            },
        },
        data: () => ({
            availableDecks: [],
            shown: true,
        }),
        computed: {
            selectedDecks(){
                return this.availableDecks.slice(0, this.numberOfPlayer);
            }
        },
        methods: {
            randomize(){
                const heroes = shuffleArray(this.heroes);
                const aspects = shuffleArray(this.aspects);
                this.availableDecks = Array.from({length: Math.min(4, heroes.length)}, (n, i) => ({hero: heroes[i], aspect: aspects[i]}));
            },
        },
        watch: {
            heroes(){
                this.randomize();
            }
        },
        created(){
            this.randomize();
        }
    };
</script>

<style scoped>
    .cards{
        display: flex;
        justify-content: space-around;
    }

    .cards img{
        width: 30%;
    }

    .name{
        padding: 10px;
        text-align: center;
    }

    .warning{
        font-weight: bold;
        color: red;
        margin: 10px;
    }

    .hero-deck{
        margin-top: 20px;
    }
</style>
