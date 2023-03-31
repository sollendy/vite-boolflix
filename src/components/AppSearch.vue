<script>
    import { store } from '../store';
    export default {
        name: "AppSearch",
        data() {
            return {
                store,
            }
        },
        emits: ['ricerca']
    }
</script>

<template>
    <nav id="search-bar">
        <div><h1>LOGO</h1></div>
        <div>
            <input v-model="store.userInput" @keyup.enter="$emit('ricerca')" type="text">
            <button @click="$emit('ricerca')">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

</style>
