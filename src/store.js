import {reactive} from 'vue';
export const store = reactive({
    filmCall: 'https://api.themoviedb.org/3/search/movie?api_key=fab6325a9f2906bf51076f0a3ebd6c67',
    film: [],
    TVCall: 'https://api.themoviedb.org/3/search/tv?api_key=fab6325a9f2906bf51076f0a3ebd6c67',
    serie: [],
    userInput: "",
    // chiamataImg: 'https://image.tmdb.org/t/p/w342'
});