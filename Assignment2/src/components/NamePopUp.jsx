import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export function NamePopUp(props){
  // const selectedYear = useSelector((state) => state.year.selectedYear);
  // const dispatch = useDispatch();

  const showModal = (event) => {
    // dispatch(setYear(Number(event.target.value)));
    console.log(props.name)
  };

  return (
    <button className ='link' onClick={showModal} style={{ "marginRight": "10px" }}>
    {props.name}
    </button>
  )
}
