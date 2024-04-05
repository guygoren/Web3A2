import React from 'react'
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCircuitInfo } from '../slices/circuitSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { favCirc } from './FavouriteList';

export const CircuitModal = () => {
  const circuitId = useSelector((state) => state.circuit.circuitId)
  const circuitInfo = useSelector((state) => state.circuit.circuitInfo)
  const dispatch = useDispatch();

  const setCircuitInfoData = (info) => {
    dispatch(setCircuitInfo(info))
  }

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetCircuitInfo}/${circuitId}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCircuitInfoData(data)
      });
  }, [circuitId])

  const renderData = (info) => {
    if (info && info.length > 0) {
      return <>
      <div> Name: {info[0].name} </div>
         <div> location: {info[0].location} </div>
          <div> country: {info[0].country} </div>
         <div> url: {info[0].url}<br/> </div>
         <button
          onClick={() => {
           // creates an array with the values of favorites
            if (favCirc.indexOf(info[0].name) > -1) {
              return
            }
            else{
              favCirc.push(info[0].name);
            }
            console.log(favCirc)
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
      Circuit Data
      {renderData(circuitInfo)}
    </>
  );
};