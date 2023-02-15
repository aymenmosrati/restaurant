import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showPassword: (state, action) => {
      state.show = !state.show;
    },
  },
});

export const { showPassword } = authSlice.actions;
export default authSlice.reducer;
