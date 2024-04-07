// slice which stores information about the driver and the driver id. Used in the driver modal
import { createSlice } from '@reduxjs/toolkit';

export const driverSlice = createSlice({
    name: 'driver',
    initialState: {
        driverInfo: [],
        driverId: 0
    },
    reducers: {
        setDriverInfo: (state, action) => {
            state.driverInfo = action.payload;
        },
        setDriverId: (state, action) => {
            state.driverId = action.payload;
        }
    },
});

export const {
    setDriverInfo,
    setDriverId
} = driverSlice.actions;

export default driverSlice.reducer;
