import '../styles/modal.css';
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks for accessing Redux store
import { setCircuitInfo } from '../slices/circuitSlice'; // Importing Redux action for setting circuit information
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum'; // Importing enumeration for API endpoints
import { setCircuitFavourites } from '../slices/favouritesSlice';

export const CircuitModal = () => {
  const favCircuits = useSelector((state) => state.favourite.circuitFavourites);
  const circuitId = useSelector((state) => state.circuit.circuitId);
  const circuitInfo = useSelector((state) => state.circuit.circuitInfo);
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to set circuit info in slice
  const setCircuitInfoData = (info) => {
    dispatch(setCircuitInfo(info));
  };

  const addCircuitFavorite = (newfav) => {
    if (favCircuits.includes(newfav)) return
    dispatch(setCircuitFavourites([...favCircuits,newfav]))
    alert(`Added ${newfav} to Favorites`)
  }


  // Calls API for circuit info
  useEffect(() => {
    let url = `${ApiEndpointEnum.GetCircuitInfo}/${circuitId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCircuitInfoData(data); // calls function to set circuit info
      });
  }, [circuitId]); // triggers when circuitID changes

  // Function to render circuit information
  const renderData = (info) => {
    if (info && info.length > 0) { // Checking if info exists and is not empty
      return (
        <>
          <div> Name: {info[0].name} </div>
          <div> Location: {info[0].location} </div>
          <div> Country: {info[0].country} </div>
          <div> URL: {info[0].url}<br /> </div>
          <button
            onClick={() => addCircuitFavorite(info[0].name)}
          >
            ❤︎ {/* Button for adding circuit to favorites */}
          </button>
        </>
      );
    } else {
      return <span> No data </span>; // If info is empty or doesn't exist
    }
  };

  return (
    <>
      Circuit Data
      {renderData(circuitInfo)}
    </>
  );
};
