import axios from "axios";

console.log(`${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_BACKEND_VERSION}`);
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_BACKEND_VERSION}`
});
