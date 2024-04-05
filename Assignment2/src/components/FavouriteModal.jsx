import React from 'react'
import '../styles/modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCircuitInfo } from '../slices/circuitSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { FavoriteList } from './FavouriteList';
return (
    <div>
      <FavouriteList favorites={favorites} />
    </div>
)