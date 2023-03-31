<script>
    import {store} from "../store.js";
    import FilmCard from "./FilmCard.vue";
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
        //     AppSearch,
         },
    }
</script>

<template>
    <div id="lista-film">
        <FilmCard v-for="pellicola in store.film" :movie="pellicola"></FilmCard>
    </div>
</template>

<style lang="scss" scoped>

</style>