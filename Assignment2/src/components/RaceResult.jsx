import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setRaceInfo, setRaceResults } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { NamePopUp } from './NamePopUp';
import { setConstructorId } from '../slices/constructorSlice';
import { setDriverId } from '../slices/driverSlice';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { Modal } from './Modal';
import { ModalTypeEnum } from '../enum/modalTypeEnum';

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
  const setOpener = (isOpen, id, modalType) => {
    switch (modalType) {
      case ModalTypeEnum.DRIVER:
        dispatch(setDriverId(Number(id)))
        break;
      case ModalTypeEnum.CONSTRUCTOR:
        dispatch(setConstructorId(Number(id)))
        break;
    }
    dispatch(setIsOpen(isOpen))
    dispatch(setModalType(Number(modalType)))
    console.log(modalType)
  }
  useEffect(() => {
    let infoUrl = `${ApiEndpointEnum.GetRaceInformation}/${selectedRace}`
    let resultsUrl = `${ApiEndpointEnum.GetRaceResults}/${selectedRace}`
    fetch(resultsUrl)
      .then(response => response.json())
      .then(data => {
        setResultsData(data)
        console.log("data")
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
              <th style={{ "width": "25%" }}>Driver Name</th>
              <th style={{ "width": "25%" }}>Constructor Name</th>
              <th style={{ "width": "10%" }}>Laps</th>
              <th style={{ "width": "10%" }}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {results.message ? "" :
              results.map((res, index) => (
                <tr key={index}>
                  <td>{res.position}</td>
                  <td><button className='link' onClick={() => setOpener(true, res.drivers.driverId, ModalTypeEnum.DRIVER)}> {res.drivers.forename}</button></td>
                  <td><button className='link' onClick={() => setOpener(true, res.constructors.constructorId, ModalTypeEnum.CONSTRUCTOR)}> {res.constructors.name}</button></td>
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
