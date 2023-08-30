import { createSlice } from "@reduxjs/toolkit";
import { students } from "../../utils/testData";

const initialState = {
  isLoading: false,
  statusOptions: ["ongoing", "closed"],
  editClassId: "",
  name: "",
  createdDate: "",
  courseName: "",
  students: students,
};

const classSlice = createSlice({
  name: "class",
  initialState,
});

export default classSlice.reducer;
