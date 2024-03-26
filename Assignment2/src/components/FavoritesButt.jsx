import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export const FavoritesButt = () => {
  // const selectedYear = useSelector((state) => state.year.selectedYear);
  // const dispatch = useDispatch();

  const showModal = (event) => {
    console.log("fav butt")
  };

  return (
    <button onClick={showModal} style={{ "marginRight": "10px"}}>
      Favorites Butt
    </button>
  )
}