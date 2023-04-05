import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      state.push({ id: action.payload.id });
    },
    removeFromWishList: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id == action.payload.id),
        1
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = wishSlice.actions;

export default wishSlice.reducer;
