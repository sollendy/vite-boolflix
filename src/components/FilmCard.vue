<script>
    export default {
        name: "FilmCard",
        data() {
            return {

            }
        },
        props: {
            movie: Object,
        },
    }
</script>

<template>
    <div class="card">
        <!-- <img src="" alt="locandina"> -->
        <div class="card-specs">
            <div>titolo: <strong>{{ movie.title }}</strong></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>