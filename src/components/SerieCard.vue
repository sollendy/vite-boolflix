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
        computed: {
            bandierina() {
                switch (this.series.original_language) {
                    case "en":
                        return "gb";
                    case "ja":
                        return "jp";
                    case "zh":
                        return "cn";
                    case "ko":
                        return "kr";
                    default:
                        return this.series.original_language;
                }
                // let lingua = this.movie.original_language;
                // if (lingua = "en") {
                //     lingua = "gb";
                //     console.log(lingua);
                // }  else if (lingua = "ja") {
                //          lingua = "jp"
                // } else if (lingua = "ko") {
                //      lingua = "kr"
                // } else if (lingua = "zh") {
                //      lingua = "cn"
                // } else {
                //      lingua = this.movie.original_language
                // }
                // return {
                //     lingua
                // }
            },
            setScore() {
                return Math.ceil(this.series.vote_average / 2)
            }
        }
    }
</script>

<template>
    <div class="cards">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w342`+series.poster_path" alt="locandina">
            <div class="card-specs">
                <div>Titolo: <strong>{{ series.name }}</strong></div>
                <div>Titolo Originale: <i>{{ series.original_name }}</i></div>
                <div>Lingua Originale: <span :class="`fi fi-${bandierina} fis`"></span></div>
                <div>Punteggio:
                    <i class="fa-solid fa-star" :class="{'activeStar':setScore > 0}"></i>
                    <i class="fa-solid fa-star" :class="{'activeStar':setScore > 1}"></i>
                    <i class="fa-solid fa-star" :class="{'activeStar':setScore > 2}"></i>
                    <i class="fa-solid fa-star" :class="{'activeStar':setScore > 3}"></i>
                    <i class="fa-solid fa-star" :class="{'activeStar':setScore > 4}"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .activeStar {
        color: yellow;
    }
</style>