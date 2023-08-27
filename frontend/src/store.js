import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import classSlice from "./features/class/classSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    class: classSlice,
  },
});
