import { configureStore } from "@reduxjs/toolkit";
import dataSlicer from "../slicers/dataSlicer";
import userPostsSlicer from "../slicers/userPosts";
import userIsSelectedAuth from "../slicers/isSelectedUserRoute";
import userDataDetailsSlicer from "../slicers/userDetails";
const store = configureStore({
  reducer: {
    data: dataSlicer,
    userPostsData: userPostsSlicer,
    userIsSelected: userIsSelectedAuth,
    userDataDetails: userDataDetailsSlicer,
  },
});

export default store;
