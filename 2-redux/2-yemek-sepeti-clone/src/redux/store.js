import { applyMiddleware, createStore, combineReducers } from "redux";
import restaurantReducer from "./reducers/restaurant-reducer";
import cartReducer from "./reducers/cart-reducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({ restaurantReducer, cartReducer });

// store oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
