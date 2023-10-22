import { configureStore } from "@reduxjs/toolkit";
import { emailReducer } from "../redux/emailSlice";

// store setup
const store = configureStore({
  reducer: {
    emailReducer,
  },
});

export default store;
