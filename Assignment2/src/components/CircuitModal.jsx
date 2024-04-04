import React from 'react'
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCircuitInfo } from '../slices/circuitSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';

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