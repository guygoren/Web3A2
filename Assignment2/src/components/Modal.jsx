
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../slices/modalSlice';
import { useEffect } from 'react';
import { ModalTypeEnum } from '../enum/modalTypeEnum';
import { CircuitModal } from './CircuitModal';
import { ConstructorModal } from './ConstructorModal';
import { DriverModal } from './DriverModal';
import { FavoriteModal} from './FavoriteModal'


export const Modal = () => {
  const dispatch = useDispatch();
  // Gets variables for 
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.modalType);
  
  // changing the modal width because the favorites modal needs to be the biggest to fit everything inside
  let modalWidth = '600px'


// Determines which modal to return based on the enum we are passing in
  const  decideType = () => {
    switch (modalType) {
      case ModalTypeEnum.CIRCUIT:
        modalWidth = '600px'
        return <CircuitModal />
      case ModalTypeEnum.CONSTRUCTOR:
        modalWidth = '600px'
        return <ConstructorModal />
      case ModalTypeEnum.DRIVER:
        modalWidth = '600px'
        return <DriverModal />
      case ModalTypeEnum.FAVOURITE:
        modalWidth = '900px'
        return <FavoriteModal />
      default:
        return <div> this is crazy, but here is my number </div>
    }
  }
  // Dispatcher for checking if modal is open
  const setOpener = (isOpen) => {
    dispatch(setIsOpen(isOpen))
  }

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen, modalWidth])

  if (!isOpen) return null;
// Creates modal based on enum but always sets the close button which will close the modal when clicked
  return (
    <div className='overlay' >
      <div className='modal' >
        <div className='modal-content'style={{"width": modalWidth}}>
          {decideType()}
          <button onClick={() => setOpener(false)} style={{ "marginLeft": "10px" }}>Close</button> 
        </div>
      </div>
    </div>
  );
};


