import React from "react";
import axios from "axios";

const api = axios.create({
   baseURL : import.meta.env.VITE_API_BASE_URL || "https://acadevo-server.vercel.app/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;