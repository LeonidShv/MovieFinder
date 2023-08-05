import { api } from "@/lib/axios";

export default {
  // getMovie: () => api.get(`/?t=Corner+Office`),
  getMovies: () => api.get(`/?s=Corner+Office`),
  // postFeedback: (data) => axios.post(`https://my.api`, data),
};
