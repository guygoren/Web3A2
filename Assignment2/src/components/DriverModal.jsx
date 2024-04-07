import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum'; // Importing enumeration for API endpoints
import { setDriverInfo } from '../slices/driverSlice';
import { favDriver } from './FavouriteList'; // Importing favorite driver list

export const DriverModal = () => {
  const driverId = useSelector((state) => state.driver.driverId);
  const driverInfo = useSelector((state) => state.driver.driverInfo);
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Sets Driver Info
  const setDriverInfoData = (info) => {
    dispatch(setDriverInfo(info));
  }

  // calls api Driver info API
  useEffect(() => {
    let url = `${ApiEndpointEnum.GetDriverInfo}/${driverId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDriverInfoData(data);
      });
  }, [driverId]); // activates when driverId changes

  //Renders driver information
  const renderData = (info) => {
    if (info && info.length > 0) { // Checking if info exists and is not empty
      return (
        <>
          <div> Name: {info[0].forename} {info[0].surname} </div>
          <div> Nationality: {info[0].nationality} </div>
          <div> URL: {info[0].url}<br /> </div>
          <button
            onClick={() => {
              // Adding driver name to favorite list if it's not already there
              if (favDriver.indexOf(info[0].forename) > -1) {
                return; // If already favorited, do nothing
              } else {
                favDriver.push(info[0].forename);
              }
            }}
          >
            ❤︎ {/* Button for adding driver to favorites */}
          </button>
        </>
      );
    } else {
      return <span> No data </span>; // If info is empty or doesn't exist
    }
  };

  return (
    <>
      Driver Info
      {renderData(driverInfo)}
    </>
  );
};
