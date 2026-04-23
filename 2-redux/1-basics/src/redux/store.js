import todoReducer from "./reducers/todo-reducer";
import themeReducer from "./reducers/theme-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

// projeye tanıtmak için export et
export default store;
