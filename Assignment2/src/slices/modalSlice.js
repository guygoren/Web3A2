import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        circuitInfo: []
    },
    reducers: {
        setCircuitInfo: (state, action) => {
            state.circuitInfo = action.payload;
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        }
    }
});

export const {
    setCircuitInfo,
    setIsOpen
} = modalSlice.actions;

export default modalSlice.reducer;