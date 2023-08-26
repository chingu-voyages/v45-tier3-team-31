const initialState = {
  user: null,
};
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
