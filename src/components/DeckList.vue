<template>
    <div class="hero-randomizer panel">
        <div class="title panel-insert" @click="shown=!shown">Players' Deck</div>

        <div class="warning" v-if="availableDecks.length < numberOfPlayer">
            Not enough Heroes for all the players.
        </div>

        <div class="decks" v-if="shown">
            <div class="hero-deck" :key="index" v-for="({hero, aspects}, index) in selectedDecks">
                <h2 class="panel-insert-content">Player {{index+1}} <span v-if="index===0">(First Player)</span></h2>
                <div class="cards">
                    <div class="card">
                        <img :src="hero.alterEgoImg" :alt="hero.alterEgo" />
                    </div>
                    <div class="card">
                        <img :src="hero.heroImg" :alt="hero.hero" />
                    </div>
                    <div class="card" v-for="aspect in aspects" :key="aspect.name">
                        <img :src="aspect.img" :alt="aspect.name">
                    </div>
                </div>
                <div class="name panel-insert-content">
                    {{hero.alterEgo}} / {{hero.hero}}({{hero.pack}}) + {{aspects.map(a => a.name).join(' + ')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeckList",

        props: {
            numberOfPlayer: {
                default: 1,
            },
            availableDecks: {
                default: [],
                required: true,
            }
        },
        data: () => ({
            shown: true,
        }),
        computed: {
            selectedDecks(){
                return this.availableDecks.slice(0, this.numberOfPlayer);
            }
        },
    };
</script>

<style scoped>
    .cards{
        display: flex;
        justify-content: space-around;
    }

    .card{
        flex: .3;
        padding: 6px;
    }

    .cards img{
        width: 100%;
        height: auto;
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
