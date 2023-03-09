import { configureStore } from "@reduxjs/toolkit";
// reducers
import citiesReducer from "./slices/cities";

export default configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
