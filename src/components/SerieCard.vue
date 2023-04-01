<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    export default {
        name: "SerieCard",
        data() {
            return {

            }
        },
        props: {
            series: Object,
        },
    }
</script>

<template>
    <div class="cards">
        <div class="card">
            <!-- <img :src="`series.${image.tmdb.org/t/p/w92}poster_path`" alt="locandina"> -->
            <div class="card-specs">
                <div>Titolo: <strong>{{ series.name }}</strong></div>
                <div>Titolo originale: <i>{{ series.original_name }}</i></div>
                <div>Lingua Originale: <span :class="`fi fi-${series.original_language} fis`"></span></div>
                <div>Punteggio: <i>{{ series.vote_average }}</i></div>
            </div>
        </div>
    </div>
</template>

<style>

</style>