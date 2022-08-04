import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterReducer";
import dashboardReducer from "../features/dashboard/dashboardReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboard: dashboardReducer,
  },
});
