import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
  searchTerm: "",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.flights = action.payload;
    });
  },
});

export const { setSearchTerm } = flightSlice.actions;

export default flightSlice.reducer;
