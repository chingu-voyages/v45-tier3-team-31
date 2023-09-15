import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { students } from "../../utils/testData";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  statusOptions: ["ongoing", "closed"],
  editClassId: "",
  name: "",
  createdDate: "",
  courseName: "",
  students: [],
};

export const getSingleClass = createAsyncThunk(
  "class/singleClass",
  async (id, thunkAPI) => {
    try {
      const { data } = await customFetch.get(`classes/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleClass.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleClass.fulfilled, (state, { payload }) => {
        const { name, date: createdDate, students, id: editClassId } = payload;
        state.isLoading = false;
        return { ...state, name, createdDate, students, editClassId };
      })
      .addCase(getSingleClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default classSlice.reducer;
