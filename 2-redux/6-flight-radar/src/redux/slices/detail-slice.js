import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail;
    });
  },
});

export default detailSlice.reducer;
