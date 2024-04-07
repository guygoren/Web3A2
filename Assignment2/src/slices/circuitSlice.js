// slice which stores information about circuit and the circuit id. Useful for the Modal
import { createSlice } from '@reduxjs/toolkit';

export const circuitSlice = createSlice({
  name: 'circuit',
  initialState: {
    circuitInfo: [],
    circuitId: 0
  },
  reducers: {
    setCircuitInfo: (state, action) => {
      state.circuitInfo = action.payload;
    },
    setCircuitId: (state, action) => {
      state.circuitId = action.payload;
    }
  },
});

export const {
  setCircuitInfo,
  setCircuitId
} = circuitSlice.actions;

export default circuitSlice.reducer;
