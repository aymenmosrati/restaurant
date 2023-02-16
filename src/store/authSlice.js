import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newPass: false,
  showPassLogin: false,
  showNewPass: false,
  showNewPassAgain: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showPassword: (state, action) => {
      state.showPassLogin = !state.showPassLogin;
    },
    showNewPassword: (state, action) => {
      state.showNewPass = !state.showNewPass;
    },
    showNewPasswordAgain: (state, action) => {
      state.showNewPassAgain = !state.showNewPassAgain;
    },
    newPassword: (state, action) => {
      state.newPass = !state.newPass;
    },
  },
});

export const { showPassword, showNewPassword, showNewPasswordAgain, newPassword } =
  authSlice.actions;
export default authSlice.reducer;
