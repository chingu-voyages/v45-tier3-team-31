const initialState = {
  isSideBarOpen: false,
  isLoading: false,
  user: null,
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    // try {

    // } catch (error) {
    //   return thunkAPI.rejectWithValue("nothing");
    // }

    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { toggleSideBar } = userSlice.actions;
export default userSlice.reducer;
