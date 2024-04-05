import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { setConstructorInfo } from '../slices/constructorSlice';
import { favConst } from './FavouriteList';

export const ConstructorModal = () => {
  const constructorId = useSelector((state) => state.constructors.constructorId)
  const constructorInfo = useSelector((state) => state.constructors.constructorInfo)
  const dispatch = useDispatch();

  const setConstructorInfoData = (info) => {
    dispatch(setConstructorInfo(info))
  }

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetConstructorInfo}/${constructorId}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setConstructorInfoData(data)
      });
  }, [constructorId])


  const renderData = (info) => {
  
    if (info && info.length > 0) {
      return <>
      <div> Name: {info[0].name} </div>
         <div> Nationality: {info[0].nationality} </div>
         <div> url: {info[0].url}<br/> </div>
         <button
          onClick={() => {
           // creates an array with the values of favorites
            if (favConst.indexOf(info[0].name) > -1) {
              return
            }
            else{
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
  

