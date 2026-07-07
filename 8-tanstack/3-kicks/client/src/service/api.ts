import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // çerezleri backend'e göndermek için
});

export default api;
