<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    export default {
        name: "FilmCard",
        data() {
            return {

            }
        },
        props: {
            movie: Object,
        },
        computed: {
            bandierina() {
                let lingua = this.movie.original_language;
                if (lingua = "en") {
                    lingua = "gb";
                    console.log(lingua);
                }  else if (lingua = "ja") {
                         lingua = "jp"
                 } else if (lingua = "ko") {
                     lingua = "kr"
                 } else if (lingua = "zh") {
                     lingua = "cn"
                 } else {
                     lingua = this.movie.original_language
                 }
                return {
                    lingua
                }
            }
        }
    }
</script>

<template>
    <div class="cards">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w342` + movie.poster_path" alt="locandina">
            <div class="card-specs">
                <div>Titolo: <strong>{{ movie.title }}</strong></div>
                <div>Titolo originale: <i>{{ movie.original_title }}</i></div>
                <div>Lingua Originale: <span :class="`fi fi-${bandierina} fis`"></span></div>
                <div>Punteggio: <i>{{ movie.vote_average }}</i></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // @import "/node_modules/flag-icons/css/flag-icons.min.css"
</style>