// Stores which page the user clicked on
import { createSlice } from '@reduxjs/toolkit';
import { PageStateEnum } from '../enum/pageStateEnum';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentState: PageStateEnum.QUALIFYING,
  },
  reducers: {
    setState: (state, action) => {
      state.currentState = action.payload;
    },
  },
});

export const { setState } = pageSlice.actions;

export default pageSlice.reducer;
