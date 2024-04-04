import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        circuitInfo: {},
        circuitId: -1
    },
    reducers: {
        setCircuitInfo: (state, action) => {
            state.circuitInfo = action.payload;
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setCircuitId: (state, action) => {
            state.circuitId = action.circuitId;
        }
    }
});

export const {
    setCircuitInfo,
    setIsOpen,
    setCircuitId
} = modalSlice.actions;

export default modalSlice.reducer;