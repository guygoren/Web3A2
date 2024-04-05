import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';

export const ConstructorModal = () => {
  const ConstructorId = useSelector((state) => state.constructor.ConstructorId)
  const ConstructorInfo = useSelector((state) => state.constructor.ConstructorInfo)
  const dispatch = useDispatch();

  const setConstructorInfoData = (info) => {
    dispatch(setConstructorInfo(info))
  }

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetConstructorInfo}/${ConstructorId}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setConstructorInfoData(data)
      });
  }, [ConstructorId])

  const renderData = (info) => {
    if (info && info.length > 0) {
      return <>
      <div> Name: {info[0].name} </div>
         <div> Nationality: {info[0].nationality} </div>
         <div> url: {info[0].url}<br/> </div>
         <button>Add Favorites</button>
      </>
    } else {
      return <span> No data </span>;
    }
  };

  return (
    <>
      Constructor Data
      {renderData(ConstructorInfo)}
    </>
  );
};
  

