import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopup: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.showPopup = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
