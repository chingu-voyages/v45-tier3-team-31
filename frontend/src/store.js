import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import classSlice from "./features/class/classSlice";
import allClassSlice from "./features/allClass/allClassSlice";
import homeworkSlice from "./features/homework/homeworkSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    class: classSlice,
    allClasses: allClassSlice,
    homework: homeworkSlice,
  },
});
