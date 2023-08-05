import { defineStore } from "pinia";
import api from "@/api";
export const useGlobalStore = defineStore("global", {
  state: () => ({
    movies: [1, 2, 3],
  }),
  getters: {},
  actions: {
    async getMovies() {
      try {
        const response = await api.getMovies();

        this.movies = response?.data?.Search;

        this.saveMoviesInStorage(response?.data?.Search);
      } catch (e) {
        console.error(e);
      }
    },

    getMoviesFromStorage() {
      this.movies = JSON.parse(localStorage.getItem("movies"));
    },

    saveMoviesInStorage(movies) {
      localStorage.setItem("movies", JSON.stringify(movies));
    },
  },
});
