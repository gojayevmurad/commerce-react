import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";
import authSlice from "../redux/auth/authSlice";
import productsSlice from "../redux/products/productsSlice";
import basketSlice from "../redux/basket/basketSlice";
import addressSlice from "../redux/address/addressSlice";
import favoritesSlice from "../redux/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    auth: authSlice,
    products: productsSlice,
    basket: basketSlice,
    address: addressSlice,
    favorites: favoritesSlice
  },
});
