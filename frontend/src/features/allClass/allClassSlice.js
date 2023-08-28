import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  search: "",
};

const initialState = {
  isLoading: true,
  classes: [],
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
