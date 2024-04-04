import { createSlice } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../enum/modalTypeEnum';

export const modalSlice = createSlice({
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
      state.render = action.payload
    }
  }
});

export const {
  setIsOpen,
  setModalType,
} = modalSlice.actions;

export default modalSlice.reducer;
