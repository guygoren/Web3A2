import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from '../slices/yearSlice';



function makeYears() {
  const options = []
  for (let year = 2000; year <= 2023; year++) {
    options.push(<option key={year} value={year}>{year}</option>);
  }
  return options;
}

export const YearSelector = () => {
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  const handleYearChange = (event) => {
    dispatch(setYear(Number(event.target.value)))
  }

  return (
    <>
      <span style={{ "marginRight": "10px"}}>Select a Season</span>
      <select style={{"marginTop": "4px" }} value={selectedYear} onChange={handleYearChange} className="flex-list">
        {makeYears()}
      </select>
   </>
  )
}

