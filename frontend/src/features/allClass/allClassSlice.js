import { createSlice } from "@reduxjs/toolkit";
import { classese } from "../../utils/testData";

const initialFiltersState = {
  search: "",
};

const initialState = {
  isLoading: true,
  classes: classese,
  totalClasses: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

const allClassesSlice = createSlice({
  name: "allClasses",
  initialState,
});

export default allClassesSlice.reducer;
