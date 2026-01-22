import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://acadevo-server.vercel.app/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;