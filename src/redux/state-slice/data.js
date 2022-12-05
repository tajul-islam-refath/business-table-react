import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    total: 0,
    result: [],
  },
  reducers: {
    setData: (state, action) => {
      state.result = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});
export const { setData, setTotal } = dataSlice.actions;
export default dataSlice.reducer;
