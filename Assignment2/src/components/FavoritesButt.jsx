// Button for viewing current favorites
import Button from 'react-bootstrap/Button'; 
import { useDispatch } from 'react-redux';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { ModalTypeEnum } from '../enum/modalTypeEnum';


export function FavoritesButt() {
  const dispatch = useDispatch();

  const favouriteOpener = (isOpen, modalType) => {
    dispatch(setIsOpen(isOpen))
    dispatch(setModalType(Number(modalType)))
  }



  return (
    <>
      {/* The Favorites button */}
      <Button variant="primary" onClick={() => favouriteOpener(true, ModalTypeEnum.FAVOURITE)}>
        Favorites
      </Button>


    </>
  );
}

export default FavoritesButt; // Exporting the component as default
