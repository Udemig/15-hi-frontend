import { applyMiddleware, createStore, combineReducers } from "redux";
import restaurantReducer from "./reducers/restaurant-reducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({ restaurantReducer });

// store oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
