<script>
  import { store } from "./store";
  import axios from "axios";
  import AppMain from './components/AppMain.vue';
  import AppSearch from './components/AppSearch.vue';
  export default {
    data() {
      return {
        store,
      }
    },
    components: {
      AppSearch,
      AppMain,
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
        this.store.film = response.data.results;
        console.log(response.data.results)
        });
      }
    }
  }
</script>

<template>
  <AppSearch @ricerca="cercaFilm()"></AppSearch>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>
