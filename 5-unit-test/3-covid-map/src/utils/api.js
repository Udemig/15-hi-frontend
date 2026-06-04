import axios from "axios";

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "b782ffa092msh3d1773dc6125311p172512jsn961131e9b38c",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});
