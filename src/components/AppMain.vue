<script>
    import {store} from "../store.js";
    import FilmCard from "./FilmCard.vue";
    import SerieCard from "./SerieCard.vue";
    // import 'font-awesome/css/font-awesome.css';
    // import axios from "axios";
    // import AppSearch from "./AppSearch.vue";
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
         components: {
            FilmCard,
            SerieCard,
        //     AppSearch,
         },
    }
</script>

<template>
    <section id="app-body">
        <div id="lista-film">
            <div><h2>i tuoi film</h2></div>
            <div id="film-cnt" class="pb-1">
                <FilmCard v-for="pellicola in store.film" :movie="pellicola"></FilmCard>
            </div>
        </div>
        <div id="lista-serie" class="pb-5">
            <div><h2>le tue serie</h2></div>
            <div id="serie-cnt" class="pb-1">
                <SerieCard v-for="teleFilm in store.serie" :series="teleFilm"></SerieCard>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#app-body {
    background-color: rgb(67, 67, 67);
    #lista-film {
        div {
            h2 {
                color: white;
                padding: 15px 0 15px 15px;
            }
        }
        #film-cnt {
            padding-left: 7.5px;
            display: flex;
            flex-flow: row;
            gap: 10px;
            overflow: auto;
            white-space: nowrap;
            //  flex-shrink: 0;
        }
    }
    #lista-serie {
        div {
            h2 {
                color: white;
                padding: 15px 0 15px 15px;
            }
        }
        #serie-cnt {
            padding-left: 7.5px;
            display: flex;
            flex-flow: row;
            gap: 10px;
            overflow: auto;
            white-space: nowrap;
        }
    }
}
</style>