import { createSlice } from '@reduxjs/toolkit';

export const yearSlice = createSlice({
  name: 'year',
  initialState: {
    selectedYear: 2000,
  },
  reducers: {
    setYear: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { setYear } = yearSlice.actions;

export default yearSlice.reducer;
