import '../styles/modal.css';
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks for accessing Redux store
import { setCircuitInfo } from '../slices/circuitSlice'; // Importing Redux action for setting circuit information
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum'; // Importing enumeration for API endpoints
import { favCirc } from './FavouriteList'; // Importing favorite circuit list

export const CircuitModal = () => {

  const circuitId = useSelector((state) => state.circuit.circuitId);
  const circuitInfo = useSelector((state) => state.circuit.circuitInfo);
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to set circuit info in slice
  const setCircuitInfoData = (info) => {
    dispatch(setCircuitInfo(info));
  };

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
            onClick={() => {
              // Adding circuit name to favorite list if it's not already there
              if (favCirc.indexOf(info[0].name) > -1) {
                return; // If already favorited, do nothing
              } else {
                favCirc.push(info[0].name);
              }
            }}
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
