/*
 ! Slice
 * Hem reducer'ı herm aksiyon tiplerini hem de aksiyon oluşturan fonksiyonları tek noktada oluşturur.

 * Nasıl tanımlarız?
 * 1) import
 * 2) name: slice ismi
 * 3) initialState: başlangıç state'i
 * 4) reducers: aksiyon'ları ve görevlerini tanımlıyoruz
  
 ! Not: Reducers içerisinde yazılan fonksiyonlarda klasik redux'tan farklı olarak state'i doğrudan güncelleyebiliyoruz (mutable) 
 */

import { createSlice } from "@reduxjs/toolkit";

// TOOLKİT
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state, action) => {
      state.count++;
    },

    decrease: (state, action) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increase, decrease, setCount } = counterSlice.actions;

export default counterSlice.reducer;

// KLASİK REDUX'TA
// const initialState = { count: 1, theme: "dark" };

// const ACTION_TYPES = {
//   INCREASE: "INCREASE",
//   DECREASE: "DECREASE",
//   SET_COUNT: "SET_COUNT",
// };

// const increase = (payload) => ({type:ACTION_TYPES.INCREASE,payload})
// const decrease = (payload) => ({type:ACTION_TYPES.DECREASE,payload})
// const setCount = (payload) => ({type:ACTION_TYPES.SET_COUNT,payload})

// const bilmemneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { ...state, count: state.count + 1 };

//     case "DECREASE":
//       return { ...state, count: state.count - 1 };

//     case "SET_COUNT":
//       return { ...state, count: action.payload };

//     default:
//       return state;
//   }
// };
