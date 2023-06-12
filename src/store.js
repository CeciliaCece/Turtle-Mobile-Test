import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";
import prizeReducer from "./slice/prizeSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    prize: prizeReducer,
  },
});
