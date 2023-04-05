import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishSlice from "../features/wish/wishSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wish: wishSlice,
  },
});