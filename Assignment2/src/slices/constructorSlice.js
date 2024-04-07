// slice which stores information about the constructor and the constructor id. Used in the constructor modal
import { createSlice } from '@reduxjs/toolkit';

export const constructorSlice = createSlice({
  name: 'constructors',
  initialState: {
    constructorInfo: [],
    constructorId: 0
  },
  reducers: {
    setConstructorInfo: (state, action) => {
      state.constructorInfo = action.payload;
    },
    setConstructorId: (state, action) => {
      state.constructorId = action.payload;
    }
  },
});

export const {
  setConstructorInfo,
  setConstructorId
} = constructorSlice.actions;

export default constructorSlice.reducer;
