import { createSlice } from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
    name: 'modal',
    initialState: {
      isOpen: false,
      modalType: ModalTypeEnum.FAVOURITE
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
  