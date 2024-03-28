import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setRaces } from "../slices/racesSlice";

export const RaceList = () => {
  const races = useSelector((state) => state.race.races);
  const dispatch = useDispatch();

  const makeRaceList = (races) => {
    dispatch(setRaces(races))
  }

  useEffect( () => {
    let url = "https://6be00c83030542cebd2e939f67186dd2.api.mockbin.io/";
    console.log("‘fetching ... here to check if I’ve gone infinite’");
    fetch (url)
    .then(response => response.json())
    .then(data => {makeRaceList(data)
    console.log(races)
  });
}, [])
    
    return (
     <ul>
      {races.map((race, index) => (
        <li key={index}>{race.name}</li>
      ) )}
     </ul>
    );
  }