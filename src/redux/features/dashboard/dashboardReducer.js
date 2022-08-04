import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setValue: (state, action) => {
      var { name, bool, main, mbool } = action.payload;
      state.value = { [name]: bool, [main]: mbool };
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, setValue } = dashboardReducer.actions;
export const selectValue = (state) => state.dashboard.value;
export default dashboardReducer.reducer;
