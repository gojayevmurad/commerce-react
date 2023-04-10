import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishSlice from "../features/wish/wishSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wish: wishSlice,
    user: userSlice,
  },
});
