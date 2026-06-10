import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

// Bileşeni test ortamı için redux provide ile sarmalayıp renderla
export function renderWithStore(ui, { preloadedState } = {}) {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: { cart: preloadedState },
  });

  return { store, ...render(<Provider store={store}>{ui}</Provider>) };
}
