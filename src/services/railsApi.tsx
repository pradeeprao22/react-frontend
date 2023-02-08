import react from "react"
import axios from "axios"

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
