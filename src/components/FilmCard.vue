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
            setScore() {
                return Math.ceil(this.movie.vote_average / 2)
            }
        }
    }
</script>

<template>
    <div class="card" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w342'+movie.poster_path+')'}">
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
</template>

<style lang="scss" scoped>
.card {
    color: white;
    border: 1.5px solid white;
    height: 265px;
    width: 206px;
    background-repeat: no-repeat;
    background-size: cover;
    flex-shrink: 0;
    // background-position: 0;
    .card-specs {
        display: none;
    }
}
    .card:hover {
        .card-specs {
            padding-left: 3px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            gap: 3px;
            background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.8));
            div {
                white-space: normal;
            }
            // display: block;
            // div {
            //     flex-shrink: 90;
            // }
        }
    }
    .stelle {
        color: grey;
    }
    .activeStar {
        color: yellow;
    }
    // @import "/node_modules/flag-icons/css/flag-icons.min.css"
</style>