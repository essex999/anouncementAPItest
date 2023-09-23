import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "lodash";
const initialState = {
  dataForOnePage: [],
  allData: [],
};
const dataSlicer = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      const shufdledData = shuffle(action.payload);
      return { ...state, allData: shufdledData };
    },
    setOnePageData: (state, action) => {
      console.log(action.payload);
      let startIndex = action.payload - 1;
      let endIndex = action.payload * 10 - 1;
      if (action.payload !== 1) {
        startIndex = startIndex * 10 - 1;
      }

      return {
        ...state,

        dataForOnePage: state.allData.slice(startIndex, endIndex),
      };
    },
  },
});

export const { setData, setOnePageData } = dataSlicer.actions;
export default dataSlicer.reducer;
