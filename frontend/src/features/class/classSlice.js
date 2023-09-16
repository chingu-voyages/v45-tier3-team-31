import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
import moment from "moment/moment";
const addStudentInitialState = {
  studentId: "",
  isEditStudent: false,
  full_name: "",
  address: "",
  attended_date: moment(Date()).format("YYYY-MM-DD"),
  parent_phone_number: "",
};

const initialState = {
  isAddStudentOpen: false,
  isLoading: false,
  statusOptions: ["ongoing", "closed"],
  editClassId: "",
  name: "",
  createdDate: "",
  courseName: "",
  students: [],
  ...addStudentInitialState,
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
export const addNewStudent = createAsyncThunk(
  "allClasses/newStudent",
  async (student, thunkAPI) => {
    try {
      const { data } = await customFetch.post("students", student);
      thunkAPI.dispatch(closeAddStudent());
      // thunkAPI.dispatch(getAllClass());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const updateStudent = createAsyncThunk(
  "allClasses/updateStudent",
  async (payload, thunkAPI) => {
    const { studentId, student } = payload;
    console.log(payload);
    console.log(student);
    try {
      const { data } = await customFetch.patch(`student/${studentId}`, student);
      thunkAPI.dispatch(closeAddStudent());
      // thunkAPI.dispatch(getAllClass());
      return data.msg;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "allClasses/deleteClass",
  async (id, thunkAPI) => {
    try {
      const { data } = await customFetch.delete(`students/${id}`);
      // thunkAPI.dispatch(getAllClass());
      return data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    viewClass: (state, { payload }) => {
      state.editClassId = payload;
    },
    showAddStudent: (state) => {
      return {
        ...state,
        isAddStudentOpen: true,
        full_name: "",
        address: "",
        parent_phone_number: "",
        isEditStudent: false,
      };
    },
    closeAddStudent: (state) => {
      state.isAddStudentOpen = false;
    },
    handleAddStudentInput: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    showEditClass: (state, { payload }) => {
      const { full_name, address, attended_date, studentId } = payload;
      return {
        ...state,
        full_name,
        address,
        attended_date,
        studentId,
        isAddStudentOpen: true,
        isEditStudent: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleClass.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleClass.fulfilled, (state, { payload }) => {
        console.log(payload);
        const {
          name,
          date: createdDate,
          students,
          id: editClassId,
        } = payload.aClass;
        state.isLoading = false;
        return { ...state, name, createdDate, students, editClassId };
      })
      .addCase(getSingleClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(addNewStudent.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewStudent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(`New Class Added`);
      })
      .addCase(addNewStudent.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateStudent.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateStudent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(updateStudent.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteStudent.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(deleteStudent.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export const {
  viewClass,
  showAddStudent,
  showEditClass,
  handleAddStudentInput,
  closeAddStudent,
} = classSlice.actions;
export default classSlice.reducer;
