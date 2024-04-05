import { createSlice } from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    circuitfavourites: [],
    driverfavourites: [],
    constructorfavourites: [],
  },
  reducers: {
    setcircuitfavourites: (state, action) => {
      state.circuitfavourites = action.payload;
    },
    setpersonfavourites: (state, action) => {
      state.personfavourites = action.payload;
    },
    setconstructorfavourites: (state, action) => {
      state.constructorfavourites = action.payload;
    },
  }
});

export const {
  setcircuitfavourites,
  setpersonfavourites,
  setconstructorfavourites,
} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;