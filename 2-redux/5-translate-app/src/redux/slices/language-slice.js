import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const languageSlice = createSlice({
  name: "language",
  initialState: { isLoading: true, error: null, languages: [] },
  // thunk aksiyonunda atılan api isteği:
  extraReducers: (builder) => {
    // yüklenme aşamasındaysa:
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
    });

    // hata olursa:
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // veri gelirse:
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.languages = action.payload;
    });
  },
});

export default languageSlice.reducer;
