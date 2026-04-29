import userReducer from "./slices/userSlice";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
import { configureStore } from "@reduxjs/toolkit";

/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir
 * redux thunk kurulu gelir
 * redux devtools kurulu gelir
 */

const store = configureStore({ reducer: { counterReducer, userReducer, crudReducer } });

export default store;
