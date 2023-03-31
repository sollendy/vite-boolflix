<script>
  import AppMain from './components/AppMain.vue';
  import AppSearch from './components/AppSearch.vue';
  export default {
    components: {
      AppSearch,
      AppMain,
    },
  }
</script>

<template>
  <AppSearch @ricerca="cercaFilm()"></AppSearch>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>
