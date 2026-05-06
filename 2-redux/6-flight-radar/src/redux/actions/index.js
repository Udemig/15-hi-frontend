import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

const params = {
  bl_lat: "34.647976",
  bl_lng: "23.021057",
  tr_lat: "43.031352",
  tr_lng: "47.307876",
  limit: "300",
  speed: "10,999999",
  altitude: "10,99999999",
};

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api'dan türkiye üzerindeki uçuş verilerini al
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen dizi içerisinde dizilerden oluşan veriyi nesnelerden oluşan diziye çevirdik
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    track: i[4],
    alt: i[5],
    speed: i[6],
  }));

  // aksiyonun payload'ını return et
  return formatted;
});

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  // api isteği at
  const res = await api.get("/flights/detail", { params: { flight: id } });

  // payload return et
  return res.data;
});
