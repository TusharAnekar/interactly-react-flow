import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "./flow-slice";

export const store = configureStore({
  reducer: flowReducer,
});
