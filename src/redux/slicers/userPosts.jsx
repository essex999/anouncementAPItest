import { createSlice } from "@reduxjs/toolkit";

const userPostsDataSlicer = createSlice({
  name: "userPostsData",
  initialState: [],
  reducers: {
    setUserPostsData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserPostsData } = userPostsDataSlicer.actions;
export default userPostsDataSlicer.reducer;
