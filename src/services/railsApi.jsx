import axios from "axios"

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://localhost:3001";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
