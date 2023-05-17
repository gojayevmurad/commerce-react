import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    exitUser: (state) => {
      localStorage.removeItem("user");
      return {};
    },
  },
});

export const { setUser, exitUser } = userSlice.actions;

export default userSlice.reducer;