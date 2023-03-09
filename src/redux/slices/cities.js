import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSelectedCities: (state, action) => ({
      ...state,
      selectedCities: action.payload,
    }),
    resetSelectedCities: () => initialState,
  },
});

export const { setSelectedCities, resetCities } = citiesSlice.actions;

export default citiesSlice.reducer;
