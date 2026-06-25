import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import store from "./store";

// Store'un tipi
export type RootState = ReturnType<typeof store.getState>;

// Store'a abone olurken her seferinde tip tanımlamak zorunda kalmamak için customHook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// appDispatch tipini tanımla
export type AppDispatch = typeof store.dispatch;

// Tipi tanımlanmış custom dispatch hooku
export const useAppDispatch = () => useDispatch<AppDispatch>();
