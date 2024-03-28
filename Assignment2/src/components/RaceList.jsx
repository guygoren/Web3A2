import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setRaces } from "../slices/racesSlice";

export const RaceList = () => {
  const races = useSelector((state) => state.race.races);
  const selectedYear = useSelector((state) => state.year.selectedYear);
  const dispatch = useDispatch();

  const makeRaceList = (races) => {
    dispatch(setRaces(races))
  }

  useEffect( () => {
    let url = `https://four513assignment1evangadsby.onrender.com/api/races/season/${selectedYear}`;
    console.log("‘fetching ... here to check if I’ve gone infinite’");
    fetch (url)
    .then(response => response.json())
    .then(data => {makeRaceList(data)
    console.log(races)
  });
}, [selectedYear])
    
return (
  <div>
    Races
    <h1>{selectedYear}</h1>
    <table style={{ "width": "100%" }}>
      <thead>
        <tr>
          <th style={{ "width": "5%", "border": "1px solid #696969" }}>ID</th>
          <th style={{ "width": "50%", "border": "1px solid #696969" }}>Name</th>
          <th style={{ "width": "30%", "border": "1px solid #696969" }}>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {races.map((race, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{race.name}</td>
              <td>Some buttons</td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
)}