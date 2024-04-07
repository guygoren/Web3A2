// Stores the selected year
import { createSlice } from '@reduxjs/toolkit';

export const yearSlice = createSlice({
  name: 'year',
  initialState: {
    wasSelected: false,
    selectedYear: 2000,
  },
  reducers: {
    setYear: (state, action) => {
      state.selectedYear = action.payload;
    },
    setWasSelected: (state, action) => {
      state.wasSelected = action.payload;
    }
  },
});

export const { setYear, setWasSelected } = yearSlice.actions;

export default yearSlice.reducer;
