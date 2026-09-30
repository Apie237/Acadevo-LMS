import axios from "axios";

// Shared API client for the learning platform backend (server/).
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://acadevo-server.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
