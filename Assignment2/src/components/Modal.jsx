import React from 'react'
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../slices/modalSlice';
import { useEffect } from 'react';
import { ModalTypeEnum } from '../enum/modalTypeEnum';
import { CircuitModal } from './CircuitModal';
import { ConstructorModal } from './ConstructorModal';

export const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.modalType);

  function decideType() {
    switch (modalType) {
      case ModalTypeEnum.CIRCUIT:
        return <CircuitModal />
      case ModalTypeEnum.CONSTRUCTOR:
        return <ConstructorModal />
      default:
        return <div> this is crazy, but here is my number </div>
    }
  }

  const setOpener = (isOpen) => {
    dispatch(setIsOpen(isOpen))
  }

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  if (!isOpen) return null;

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-content'>
        {decideType()}
        <button onClick={() => setOpener(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};


