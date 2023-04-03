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
        <div><h1>BOOLFLIX</h1></div>
        <div>
            <input v-model="store.userInput" @keyup.enter="$emit('ricerca')" type="text">
            <button @click="$emit('ricerca')">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
#search-bar {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: rgb(0, 0, 0);
    div{
        h1{
            color: red;
        }
    }
}
</style>
