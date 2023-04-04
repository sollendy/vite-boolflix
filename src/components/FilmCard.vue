<script>
    // import "font-awesome/css/font-awesome.css";
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
                switch (this.movie.original_language) {
                    case "en":
                        return "gb";
                    case "ja":
                        return "jp";
                    case "zh":
                        return "cn";
                    case "ko":
                        return "kr";
                    default:
                        return this.movie.original_language;
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
            //credo di starla facendo male non è così che si converte una cifra da 1 a 10 in una da 1 a 5 insomma per come la sto facendo io tutti sti film hanno il punteggio da capolavori
            setScore() {
                return Math.ceil(this.movie.vote_average / 2)
            }
        }
    }
</script>

<template>
    <div class="cards">
        <div class="card" :style="{backgroundImage: url("https://image.tmdb.org/t/p/w342"+movie.poster.path)}">
            <!-- <img :src="`https://image.tmdb.org/t/p/w342` + movie.poster_path" alt="locandina"> -->
            <div class="card-specs">
                <div>Titolo: <strong>{{ movie.title }}</strong></div>
                <div>Titolo Originale: <i>{{ movie.original_title }}</i></div>
                <div>Lingua Originale: <span :class="`fi fi-${bandierina} fis`"></span></div>
                <div>Punteggio: 
                    <i class="stelle fa-solid fa-star" :class="{'activeStar':setScore > 0}"></i>
                    <i class="stelle fa-solid fa-star" :class="{'activeStar':setScore > 1}"></i>
                    <i class="stelle fa-solid fa-star" :class="{'activeStar':setScore > 2}"></i>
                    <i class="stelle fa-solid fa-star" :class="{'activeStar':setScore > 3}"></i>
                    <i class="stelle fa-solid fa-star" :class="{'activeStar':setScore > 4}"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .stelle {
        color: grey;
    }
    .activeStar {
        color: yellow;
    }
    // @import "/node_modules/flag-icons/css/flag-icons.min.css"
</style>