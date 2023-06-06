import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/authSlice";
import productsSlice from "../redux/products/productsSlice";
import basketSlice from "../redux/basket/basketSlice";
import addressSlice from "../redux/address/addressSlice";
import favoritesSlice from "../redux/favorites/favoritesSlice";
import profileSlice from "../redux/profile/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    basket: basketSlice,
    address: addressSlice,
    favorites: favoritesSlice,
    profile: profileSlice
  },
});
