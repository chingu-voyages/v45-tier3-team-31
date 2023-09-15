import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classese } from "../../utils/testData";
import moment from "moment/moment";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
const initialFiltersState = {
  search: "",
};
const initialAddClassState = {
  createdDate: moment(Date()).format("YYYY-MM-DD"),
  name: "",
  status: "ongoing",
  statusOptions: ["ongoing", "closed"],
  courseName: "",
  courseId: "",
  courses: [],
  editClassId: "",
  isEdit: false,
};
const initialState = {
  isAddClassOpen: false,
  isLoading: true,
  classes: [],
  totalClasses: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
  ...initialAddClassState,
};
export const getAllClass = createAsyncThunk(
  "allClasses/getClasses",
  async (_, thunkAPI) => {
    try {
      const { data } = await customFetch.get("classes");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const addNewClass = createAsyncThunk(
  "allClasses/newClass",
  async (aClass, thunkAPI) => {
    try {
      const { data } = await customFetch.post("classes", aClass);
      thunkAPI.dispatch(closeAddClass());
      thunkAPI.dispatch(getAllClass());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const updateClass = createAsyncThunk(
  "allClasses/updateClass",
  async (payload, thunkAPI) => {
    const { editClassId, aClass } = payload;
    console.log(payload);
    console.log(aClass);
    try {
      const { data } = await customFetch.patch(
        `classes/${editClassId}`,
        aClass
      );
      thunkAPI.dispatch(closeAddClass());
      thunkAPI.dispatch(getAllClass());
      return data.msg;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const deleteClass = createAsyncThunk(
  "allClasses/deleteClass",
  async (id, thunkAPI) => {
    try {
      const { data } = await customFetch.delete(`classes/${id}`);
      thunkAPI.dispatch(getAllClass());
      return data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const allClassesSlice = createSlice({
  name: "allClasses",
  initialState,
  reducers: {
    showAddClass: (state) => {
      state.isAddClassOpen = true;
      state.name = "";
      state.isEdit = "";
      state.editClassId = "";
    },
    closeAddClass: (state) => {
      state.isAddClassOpen = false;
    },
    handleAddClassInput: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    showEditClass: (state, { payload }) => {
      const { name, status, createdDate, editClassId } = payload;
      return {
        ...state,
        ...payload,
        isAddClassOpen: true,
        isEdit: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllClass.fulfilled, (state, { payload }) => {
        const { classes, amount } = payload;
        state.isLoading = false;
        state.classes = classes;
        state.totalClasses = amount || 0;
      })
      .addCase(getAllClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(addNewClass.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewClass.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(`New Class Added`);
      })
      .addCase(addNewClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateClass.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateClass.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(updateClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteClass.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteClass.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success(payload);
      })
      .addCase(deleteClass.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export const {
  showEditClass,
  handleAddClassInput,
  showAddClass,
  closeAddClass,
} = allClassesSlice.actions;
export default allClassesSlice.reducer;
