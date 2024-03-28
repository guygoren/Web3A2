import { createSlice } from '@reduxjs/toolkit';

export const raceSlice = createSlice({
    name: 'race',
    initialState: {
        races: []
    },
    reducers: {
        setRaces: (state, action) => {
            state.races = action.payload;
        },
    },
});

export const { setRaces } = raceSlice.actions;

export default raceSlice.reducer;
