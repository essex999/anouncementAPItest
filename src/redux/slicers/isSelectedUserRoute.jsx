import { createSlice } from "@reduxjs/toolkit";

const userSelectedAuth = createSlice({
  name: "userIsSelected",
  initialState: false,
  reducers: {
    selectUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectUser } = userSelectedAuth.actions;
export default userSelectedAuth.reducer;
