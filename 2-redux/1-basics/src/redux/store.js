import todoReducer from "./reducers/todo-reducer";
import themeReducer from "./reducers/theme-reducer";
import { combineReducers, createStore } from "redux";

// reducer'ları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
