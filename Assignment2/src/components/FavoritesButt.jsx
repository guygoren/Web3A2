// Button for viewing current favorites
import Button from 'react-bootstrap/Button'; 
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { ModalTypeEnum } from '../enum/modalTypeEnum';


export function FavoritesButt() {
  
  const dispatch = useDispatch();
  const favDrivers = useSelector((state) => state.favourite.driverFavourites);
  const favConstructors = useSelector((state) => state.favourite.constructorFavourites);
  const favCircuits = useSelector((state) => state.favourite.circuitFavourites);
  const favouriteOpener = (isOpen, modalType) => {
    dispatch(setIsOpen(isOpen))
    dispatch(setModalType(Number(modalType)))
  }

  const isThereFavorite = () =>{
    let favorite = [...favDrivers, ...favCircuits, ...favConstructors]
    if (favorite.length == 0)
      return false
    return true
  }


  return (
    <>
      {/* The Favorites button */}
      <Button variant="primary" onClick={() => favouriteOpener(true, ModalTypeEnum.FAVOURITE)} style={{ "marginRight": "10px" }} disabled={!isThereFavorite()}>
        Favorites
      </Button>


    </>
  );
}

export default FavoritesButt; // Exporting the component as default
