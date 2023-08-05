import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  params: { apikey: import.meta.env.VITE_API_KEY },
});
