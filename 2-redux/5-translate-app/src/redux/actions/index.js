import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// dil verileri için api isteği atıp cevaba göre reducer'a haber veren thunk aksiyonu
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  // api'dan dil verilerini al
  const res = await api.get("/languages");

  // aksiyonun payload'ını return et
  return res.data.languages;
});

// çeviri sonucu için api isteği atıp cevaba göre reducer'a haber veren thunk aksiyonu
export const translateText = createAsyncThunk("translate/translateText", async (_, { getState }) => {
  // store'da tutulan verilere eriş
  const state = getState().translateReducer;

  // api'a çeviri için istek at
  const res = await api.post("", {
    q: state.textToTranslate,
    source: state.sourceLang.value,
    target: state.targetLang.value,
  });

  // aksiyonun payload'ını return et
  return res.data.data.translations.translatedText[0];
});
