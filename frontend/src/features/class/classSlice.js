import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  statusOptions: ["ongoing", "closed"],
  editClassId: "",
  name: "",
  createdDate: "",
  courseName: "",
};

const classSlice = createSlice({
  name: "class",
  initialState,
});

export default classSlice.reducer;
