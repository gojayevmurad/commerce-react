import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import wishSlice from "../features/wish/wishSlice";
import userSlice from "../features/user/userSlice";
import authSlice from "../redux/auth/authSlice";
import productsSlice from "../redux/products/productsSlice";
import basketSlice from "../redux/basket/basketSlice";
import addressSlice from "../redux/address/addressSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wish: wishSlice,
    user: userSlice,
    auth: authSlice,
    products: productsSlice,
    basket: basketSlice,
    address: addressSlice
  },
});
