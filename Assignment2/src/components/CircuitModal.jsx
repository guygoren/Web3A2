import React from 'react'
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../slices/modalSlice';
import { useEffect } from 'react';


export const CircuitModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

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
            Hello
          <button onClick={() => setOpener(false)}>Close</button>
        </div>
      </div>
    );
  };


