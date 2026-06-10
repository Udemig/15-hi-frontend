import { createSlice } from "@reduxjs/toolkit";

// Item identity = (productId + serving). Cone vs cup of the same product are
// two distinct cart lines; same product + same serving increments quantity.
const matchesItem = (item, { id, serving }) =>
  item.id === id && item.serving === serving;

const initialState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // payload: { id, name, price, image, serving }
    addToCart(state, action) {
      const { id, name, price, image, serving } = action.payload;
      const existing = state.items.find((item) =>
        matchesItem(item, { id, serving }),
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id, name, price, image, serving, quantity: 1 });
      }
    },

    // payload: { id, serving }
    increaseQuantity(state, action) {
      const item = state.items.find((entry) =>
        matchesItem(entry, action.payload),
      );
      if (item) item.quantity += 1;
    },

    // payload: { id, serving } — floor at 1 (remove is a separate action).
    decreaseQuantity(state, action) {
      const item = state.items.find((entry) =>
        matchesItem(entry, action.payload),
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    // payload: { id, serving }
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => !matchesItem(item, action.payload),
      );
    },

    clearCart(state) {
      state.items = [];
    },

    openCart(state) {
      state.isOpen = true;
    },

    closeCart(state) {
      state.isOpen = false;
    },

    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} = cartSlice.actions;

/* ── Derived selectors ─────────────────────────────────────────── */
export const selectCartItems = (state) => state.cart.items;
export const selectCartIsOpen = (state) => state.cart.isOpen;

export const selectTotalItems = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
