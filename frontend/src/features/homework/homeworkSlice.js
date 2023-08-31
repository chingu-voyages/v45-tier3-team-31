import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  criteria: [],
  studentGrade: [],
  createdAt: "",
};

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
});

export default homeworkSlice.reducer;
