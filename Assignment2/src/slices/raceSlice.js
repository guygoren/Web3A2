import { createSlice } from '@reduxjs/toolkit';

export const raceSlice = createSlice({
  name: 'race',
  initialState: {
    races: [],
    selectedRace: 1,
    qualifying: [],
    result: [],
    raceInfo: {},
    raceResults: [],
    driverStandings: [],
    constructorsStandings: [],
    circuitPopup: false
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
    },
    setRaceResults: (state, action) => {
      state.raceResults = action.payload;
    },
    setDriverStandings: (state, action) => {
      state.driverStandings = action.payload;
    },
    setConstructorsStandings: (state, action) => {
      state.constructorsStandings = action.payload;
    }
  },
});

export const {
  setRaces,
  setSelectedRace,
  setQualifying,
  setResult,
  setRaceInfo,
  setRaceResults,
  setDriverStandings,
  setConstructorsStandings
} = raceSlice.actions;

export default raceSlice.reducer;
