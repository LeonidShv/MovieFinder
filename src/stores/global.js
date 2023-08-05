import { defineStore } from "pinia";
import api from "@/api"
export const useGlobalStore = defineStore('global', {
  state: () =>
    ({
      movies: [],
    }),
  getters: {},
  actions: {
    async getMovies() {
     try {
      const response = await api.getMovies();

      this.movies = response?.data?.Search;
     } catch(e) {
      console.error(e);
     }
    }
  }
})
