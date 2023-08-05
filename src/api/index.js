import { api } from "@/lib/axios";

export default {
  getMovie: () => api.get(`/?t=Corner+Office`),
  searchMovie: () => api.get(`/?s=Corner+Office&page=1`),
  // postFeedback: (data) => axios.post(`https://my.api`, data),
};
