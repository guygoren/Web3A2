import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { setDriverInfo } from '../slices/driverSlice';
import { favDriver } from './FavouriteList';


export const DriverModal = () => {
  const driverId = useSelector((state) => state.driver.driverId)
  const driverInfo = useSelector((state) => state.driver.driverInfo)
  const dispatch = useDispatch();

  const setDriverInfoData = (info) => {
    dispatch(setDriverInfo(info))
  }

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetDriverInfo}/${driverId}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDriverInfoData(data)
      });
  }, [driverId])

  const renderData = (info) => {
    if (info && info.length > 0) {
      return <>
      <div> Name: {info[0].forename} {info[0].surname} </div>
         <div> Nationality: {info[0].nationality} </div>
         <div> url: {info[0].url}<br/> </div>
         <button
          onClick={() => {
           // creates an array with the values of favorites
            if (favDriver.indexOf(info[0].forename) > -1) {
              return
            }
            else{
              favDriver.push(info[0].forename);
            }
            console.log(favDriver)
            }
          }
        >
          ❤︎
        </button>
      </>
    } else {
      return <span> No data </span>;
    }
  };

  return (
    <>
      Driver Info
      {renderData(driverInfo)}
    </>
  );
};
  

