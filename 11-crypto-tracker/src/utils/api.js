import axios from "axios";

const api = axios.create({
  // temel adresi
  baseURL: "https://api.coingecko.com/api/v3",
  // api isteklerine dahil edilecek header
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

export default api;
