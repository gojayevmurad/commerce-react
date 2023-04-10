import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    exitUser: (state) => {
      return {};
    },
  },
});

export const { setUser , exitUser } = userSlice.actions;

export default userSlice.reducer;
