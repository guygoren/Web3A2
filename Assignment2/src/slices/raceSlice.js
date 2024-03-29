import { createSlice } from '@reduxjs/toolkit';

export const raceSlice = createSlice({
  name: 'race',
  initialState: {
    races: [],
    selectedRace: 1,
    qualifying: [],
    result: [],
    raceInfo: {}
  },
  reducers: {
    setRaces: (state, action) => {
      state.races = action.payload;
    },
    setSelectedRace: (state, action) => {
      state.selectedRace = action.payload;
    },
    setQualifying: (state, action) => {
      state.qualifying = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setRaceInfo: (state, action) => {
      state.raceInfo = action.payload;
    }
  },
});

export const {
  setRaces,
  setSelectedRace,
  setQualifying,
  setResult,
  setRaceInfo
} = raceSlice.actions;

export default raceSlice.reducer;
