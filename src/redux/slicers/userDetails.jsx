import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userDataDetails",
  initialState: [],
  reducers: {
    setUserDataDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserDataDetails } = userData.actions;
export default userData.reducer;
