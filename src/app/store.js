import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
