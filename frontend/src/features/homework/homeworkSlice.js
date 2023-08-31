import { createSlice } from "@reduxjs/toolkit";
import { criteria, studentGrade } from "../../utils/testData";

const initialState = {
  criteria: criteria,
  studentGrade: studentGrade,
  createdAt: "",
};

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
});

export default homeworkSlice.reducer;
