import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./detail-slice";

const store = configureStore({ reducer: detailReducer });

export default store;
