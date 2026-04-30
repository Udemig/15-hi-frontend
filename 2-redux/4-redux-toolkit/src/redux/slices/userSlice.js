import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * createAsyncThunk ile asenkron thunk aksiyonu oluşturabiliriz
 * reducer'a haber verme işlemi otomatik olarak gerçekleşir (pending|fulfilled|rejected)
 * parametreler:
 * 1) aksiyonun tipi
 * 2) aksiyonun payload'ını return eden fonksiyon
 */
export const getUsers = createAsyncThunk("user/getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload'ı return edilir
  return res.data.users;
});

const userSlice = createSlice({
  name: "user",
  initialState: { isLoading: true, error: null, users: [] },
  // senkron aksiyonları yönetmek için
  reducers: {},
  // asenkron aksiyonları yöntmek için
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
