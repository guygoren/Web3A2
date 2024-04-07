// Stores all the favorites the user selects. Will not keep favorites if user refreshes the web page
import { createSlice } from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    circuitFavourites: [],
    driverFavourites: [],
    constructorFavourites: [],
  },
  reducers: {
    setCircuitFavourites: (state, action) => {
      state.circuitFavourites = action.payload;
    },
    setDriverFavourites: (state, action) => {
      state.driverFavourites = action.payload;
    },
    setConstructorFavourites: (state, action) => {
      state.constructorFavourites = action.payload;
    },
  }
});

export const {
  setCircuitFavourites,
  setDriverFavourites,
  setConstructorFavourites,
} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;