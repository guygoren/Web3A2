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
