import axios from "axios";

const api = axios.create({
  baseURL: "https://acadevo-server.vercel.app/api", 
});

export default api;