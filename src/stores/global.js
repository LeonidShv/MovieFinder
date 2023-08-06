import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("global", {
  state: () => ({
    // TODO: movies
    movies: [1, 2, 3],
    movie: {},
  }),
  getters: {},
  actions: {
    async getMovies(movieTitle) {
      try {
        const response = await api.getMovies(movieTitle);

        this.movies = response?.data?.Search;

        this.saveMoviesInStorage(response?.data?.Search);
      } catch (e) {
        console.error(e);
      }
    },

    async getMovieById(id) {
      const response = await api.getMovieById(id);

      this.movie = response.data;
    },

    getMoviesFromStorage() {
      this.movies = JSON.parse(localStorage.getItem("movies"));
    },

    saveMoviesInStorage(movies) {
      localStorage.setItem("movies", JSON.stringify(movies));
    },
  },
});
