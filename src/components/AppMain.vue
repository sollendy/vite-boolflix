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
    <div id="lista-film">
        <div><h2>i tuoi film</h2></div>
        <div id="film-cnt">
            <FilmCard v-for="pellicola in store.film" :movie="pellicola"></FilmCard>
        </div>
    </div>
    <div id="lista-serie">
        <div><h2>le tue serie</h2></div>
        <SerieCard v-for="teleFilm in store.serie" :series="teleFilm"></SerieCard>
    </div>
</template>

<style lang="scss" scoped>
#lista-film {
    div {
        h2 {
            padding: 15px 0 15px 15px;
        }
    }
}
#lista-serie {
    div {
        h2 {
            padding: 15px 0 15px 15px;
        }
    }
}
// #film-cnt {
//    display: flex;
// }
</style>