import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export const AboutButt = () => {
  // const selectedYear = useSelector((state) => state.year.selectedYear);
  // const dispatch = useDispatch();

  const showModal = (event) => {
    // dispatch(setYear(Number(event.target.value)));
    console.log("me no code yet")
  };

  return (
    <button onClick={showModal}>
      About Butt
    </button>
  )
}

