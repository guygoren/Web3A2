import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setQualifying, setRaceResults } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { RaceQualifying } from './RaceQualifying';

export const RaceResult = () => {
  const results = useSelector((state) => state.race.raceResults)
  const selectedRace = useSelector((state) => state.race.selectedRace)
  const raceInfo = useSelector((state) => state.race.raceInfo)
  const dispatch = useDispatch();
  
  const setResultsData = (results) => {
    dispatch(setRaceResults(results));
  };
  const setQualifyingData = (qualifying) => {
    dispatch(setQualifying(qualifying));
  };

  useEffect(() => {
    let qualUrl = `${ApiEndpointEnum.GetQualifyingByRace}/${selectedRace}`
    let resultsUrl = `${ApiEndpointEnum.GetRaceResults}/${selectedRace}`
    fetch(resultsUrl)
    .then(response => response.json())
    .then(data => {
      setResultsData(data)
      console.log(data)
    });
    fetch(qualUrl)
      .then(response => response.json())
      .then(data => {
        setQualifyingData(data)
      });
  }, [selectedRace])

  return (
    <>
      <div className="box-column" id="column2">
      {raceInfo.name}, Round:{raceInfo.round}, {raceInfo.year}, {raceInfo.date}, {raceInfo.circuits ? `${raceInfo.circuits.name}, ` : ""}, {raceInfo.url}        <table style={{ "width": "100%" }}>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>&nbsp;</th>
              <th style={{ "width": "25%" }}>&nbsp;</th>
              <th style={{ "width": "10%" }}>Laps</th>
              <th style={{ "width": "10%" }}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {results.message ? "" :
              results.map((res, index) => (
              <tr key={index}>
                <td>{res.position}</td>
                <td>{res.drivers.forename} {res.drivers.surname}</td>
                <td>{res.constructors.name}</td>
                <td>{res.laps}</td>
                <td>{res.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
