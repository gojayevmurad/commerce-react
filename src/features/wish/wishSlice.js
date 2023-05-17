import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      state.push({ id: action.payload.id });
      localStorage.setItem("wish", JSON.stringify(state));
    },
    removeFromWishList: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id == action.payload.id),
        1
      );
      localStorage.setItem("wish", JSON.stringify(state));
    },
    setWishFromLocalStorage: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToWishList, removeFromWishList, setWishFromLocalStorage } = wishSlice.actions;

export default wishSlice.reducer;