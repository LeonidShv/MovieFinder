import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("global", {
  state: () => ({
    movies: [],
    movie: {},
  }),
  getters: {},
  actions: {
    async getMovies(movieTitle) {
      const moviesFromStorage = getMoviesFromStorage(movieTitle);

      if (moviesFromStorage.length) {
        this.movies = moviesFromStorage;
      } else {
        const response = await api.getMovies(movieTitle);
        this.movies = response?.data?.Search;

        saveMoviesInStorage(movieTitle, response?.data?.Search);
      }
    },

    async getMovieById(id) {
      const response = await api.getMovieById(id);

      this.movie = response.data;
    },
  },
});

function getMoviesFromStorage(movieTitle) {
  return JSON.parse(sessionStorage.getItem(`movies/${movieTitle}`) || "[]");
}

function saveMoviesInStorage(movieTitle, movies) {
  sessionStorage.setItem(`movies/${movieTitle}`, JSON.stringify(movies));
}
