// Blank slate for modals, made this so every modal dosnt need a seperate slice/streamline coding
import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../enum/modalTypeEnum';

export const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: ModalTypeEnum.CIRCUIT
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload
    }
  }
});

export const {
  setIsOpen,
  setModalType,
} = ModalSlice.actions;

export default ModalSlice.reducer;
