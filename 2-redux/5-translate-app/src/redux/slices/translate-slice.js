import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    sourceLang: { label: "Dili algıla", value: undefined },
    targetLang: { label: "English", value: "en" },
    textToTranslate: "",
    translatedText: "",
    isLoading: false,
    error: null,
    history: [],
  },

  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },

    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },

    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },

    swap: (state) => {
      // değişme anında state'ler birbirini ezmesin diye geçici değişkenler oluştur
      const tempSource = state.sourceLang;
      const tempTarget = state.targetLang;
      const tempText = state.textToTranslate;
      const tempTranslated = state.translatedText;

      state.sourceLang = tempTarget;
      state.targetLang = tempSource;
      state.textToTranslate = tempTranslated;
      state.translatedText = tempText;
    },

    clearHistory: (state) => {
      state.history = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.translatedText = "";
    });

    builder.addCase(translateText.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.translatedText = action.payload;

      // çeviri sonucu geldiyse çeviri geçmişine kaydet
      if (state.textToTranslate && action.payload) {
        state.history.unshift({
          id: Date.now(),
          textToTranslate: state.textToTranslate,
          translatedText: action.payload,
          sourceLang: state.sourceLang.label,
          targetLang: state.targetLang.label,
          timestamp: new Date().getTime(),
        });
      }
    });
  },
});

export const { setSource, setTarget, setText, swap, clearHistory } = translateSlice.actions;

export default translateSlice.reducer;
