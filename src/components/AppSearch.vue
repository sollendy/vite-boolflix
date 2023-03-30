<script>
    import { store } from '../store';
    export default {
        name: "AppSearch",
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
    <nav id="search-bar">
        <div>LOGO</div>
        <div>
            <input @keyup.enter="$emit('ricerca')" type="text">
            <button @click="$emit('ricerca')">Cerca</button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

</style>
