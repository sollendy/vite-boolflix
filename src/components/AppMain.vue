<script>
    import {store} from "../store.js";
    import axios from "axios";
    import AppSearch from "./AppSearch.vue";
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
        components: {
            AppSearch,
        },
        created() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=fab6325a9f2906bf51076f0a3ebd6c67').then((res)=>{
                this.store.film = res.data;
                console.log(res)
                // console.log(this.store.film)
            });
        },
        methods: {
            cercaFilm() {
                let apiValore = this.store.filmCall
                if(this.store.userInput != "") {
                    apiValore += `&query=${this.store.userInput}`;
                    console.log(apiValore)
                }
                axios.get(apiValore).then((response) => {
                    this.store.film = res.data;
                    console.log(response.data.results)
                });
            }
        }
    }
</script>

<template>

</template>

<style lang="scss" scoped>

</style>