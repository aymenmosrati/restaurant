import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import modal from "./modalSlice";

export default configureStore({
  reducer: {
    auth,
    modal,
  },
});
