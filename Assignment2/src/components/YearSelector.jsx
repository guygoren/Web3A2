import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setYear, setWasSelected } from '../slices/yearSlice';

function makeYears() {
  let options = [];
  for (let year = 2000; year <= 2023; year++) {
    options.push(<option key={year} value={year}>{year}</option>);
  }
  return options;
}

export const YearSelector = () => {
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  const handleYearChange = (event) => {
    dispatch(setYear(Number(event.target.value)));
    dispatch(setWasSelected(true))
  };

  return (
    <>
      <span style={{ "marginRight": "10px" }}>Selected Year</span>
      <select style={{ "marginTop": "4px" }} value={selectedYear} onChange={handleYearChange} className="flex-list">
        {makeYears()}
      </select>
    </>
  )
}

