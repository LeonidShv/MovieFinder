import { api } from "@/lib/axios";

export default {
  getMovies: (movieTitle) => api.get(`/?s=${movieTitle}`),
  getMovieById: (id) => api.get(`/?i=${id}`),
};
