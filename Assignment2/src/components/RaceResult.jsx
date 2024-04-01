import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setRaceInfo, setRaceResults } from '../slices/raceSlice';
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
  const setRaceInfoData = (information) => {
    dispatch(setRaceInfo(information));
  }

  useEffect(() => {
    let infoUrl = `${ApiEndpointEnum.GetRaceInformation}/${selectedRace}`
    let resultsUrl = `${ApiEndpointEnum.GetRaceResults}/${selectedRace}`
    fetch(resultsUrl)
    .then(response => response.json())
    .then(data => {
      setResultsData(data)
      console.log(data)
    });
    fetch(infoUrl)
    .then(response => response.json())
    .then(data => {
      setRaceInfoData(data[0])
      console.log(data[0])
    });
  }, [selectedRace])

  return (
    <>
      <div className="box-column" id="column2">
      {raceInfo.name}, Round:{raceInfo.round}, {raceInfo.year}, {raceInfo.date}, {raceInfo.circuits ? `${raceInfo.circuits.name}, ` : ""}, {raceInfo.url}        <table style={{ "width": "100%" }}>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>driver name</th>
              <th style={{ "width": "25%" }}>constructor name</th>
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
