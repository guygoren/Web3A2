// Creates the year selector 
import { useSelector, useDispatch } from 'react-redux';
import { setYear, setWasSelected } from '../slices/yearSlice';

// Lists years between 2000 and 2023
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
  // Sets year when year is selected
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

