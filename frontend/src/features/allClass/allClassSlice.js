import { createSlice } from "@reduxjs/toolkit";
import { classese } from "../../utils/testData";

const initialFiltersState = {
  search: "",
};
const initialAddClassState = {
  createdDate: new Date(),
  name: "",
  status: "ongoing",
  statusOptions: ["ongoing", "closed"],
  courseName: "",
  courseId: "",
  courses: [],
};
const initialState = {
  isAddClassOpen: false,
  isLoading: true,
  classes: classese,
  totalClasses: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
  ...initialAddClassState,
};

const allClassesSlice = createSlice({
  name: "allClasses",
  initialState,
  reducers: {
    showAddClass: (state) => {
      state.isAddClassOpen = true;
    },
    closeAddClass: (state) => {
      state.isAddClassOpen = false;
    },
  },
});
export const { showAddClass, closeAddClass } = allClassesSlice.actions;
export default allClassesSlice.reducer;
