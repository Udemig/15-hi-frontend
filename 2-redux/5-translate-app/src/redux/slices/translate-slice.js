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
  },

  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(translateText.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.translatedText = action.payload;
    });
  },
});

export const { setSource, setTarget, setText } = translateSlice.actions;

export default translateSlice.reducer;
