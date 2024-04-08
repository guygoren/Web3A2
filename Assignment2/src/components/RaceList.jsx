
import { useSelector, useDispatch } from 'react-redux';
import { setRaces, setSelectedRace } from '../slices/raceSlice';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { setCircuitId } from '../slices/circuitSlice';
import { useEffect } from 'react';
import "../styles/RaceList.css";
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { Modal } from './Modal'
import { ModalTypeEnum } from '../enum/modalTypeEnum';


export const RaceList = () => {
  const races = useSelector((state) => state.race.races);
  const selectedYear = useSelector((state) => state.year.selectedYear)
  const dispatch = useDispatch();

  // Fucntion to open a modal with the circuit id and modaltype
  const setOpener = (isOpen, circId, modalType) => {
    dispatch(setIsOpen(isOpen))
    dispatch(setCircuitId(Number(circId)))
    dispatch(setModalType(Number(modalType)))
  }

  // Function to set races
  const setNewSeasonRaces = (races) => {
    dispatch(setRaces(races));
  };

  // function to set specific selected race
  const setCurrentRace = (raceId) => {
    dispatch(setSelectedRace(Number(raceId)));
  };

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetSeasonRaces}/${selectedYear}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNewSeasonRaces(data)
      });
  }, [selectedYear])

  return (
    <>
      <div className="box-column" id="column1">
        <div>{selectedYear}'s Races</div>
        <table style={{ "width": "100%" }}>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>ID</th>
              <th style={{ "width": "80%" }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Maps all the races and the information button which opens a modal */}
            {races.map((race, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={() => setCurrentRace(race.raceId)}><a href="#" onClick={() => { return }}>{race.name}</a></td>
                <td><button onClick={() => setOpener(true, race.circuitId, ModalTypeEnum.CIRCUIT)}>Information</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Calls modal */}
      <Modal />
    </>
  )
}
