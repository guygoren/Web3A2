//Modal for Contructor information
import { useSelector, useDispatch } from 'react-redux';// Importing hooks for accessing Redux store
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { setConstructorInfo } from '../slices/constructorSlice'; // Importing Redux action for setting circuit information
import { favConst } from './FavouriteList'; // Importing favorite Constructor list

export const ConstructorModal = () => {
  const constructorId = useSelector((state) => state.constructors.constructorId)
  const constructorInfo = useSelector((state) => state.constructors.constructorInfo)
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to set constructor information in slice
  const setConstructorInfoData = (info) => {
    dispatch(setConstructorInfo(info))
  }

  // Calls API for contructor info
  useEffect(() => {
    let url = `${ApiEndpointEnum.GetConstructorInfo}/${constructorId}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setConstructorInfoData(data) // calls function to set constructor info
      });
  }, [constructorId]) // trigger when contructorId changes


  const renderData = (info) => {
    if (info && info.length > 0) {
      return <>
        <div> Name: {info[0].name} </div>
        <div> Nationality: {info[0].nationality} </div>
        <div> url: {info[0].url}<br /> </div>
        <button
          onClick={() => {
            // creates an array with the values of favorites
            if (favConst.indexOf(info[0].name) > -1) {
              return
            }
            else {
              favConst.push(info[0].name);
            }
            console.log(favConst)
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
      Constructor Data
      {renderData(constructorInfo)}
    </>
  );
};


