// Renders page for qualifying racers
import { useSelector, useDispatch } from 'react-redux';
import { setQualifying, setRaceInfo } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { ModalTypeEnum } from '../enum/modalTypeEnum';
import { setDriverId } from '../slices/driverSlice';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { setConstructorId } from '../slices/constructorSlice';

export const RaceQualifying = () => {
  const qualifying = useSelector((state) => state.race.qualifying);
  const selectedRace = useSelector((state) => state.race.selectedRace)
  const raceInfo = useSelector((state) => state.race.raceInfo)
  const dispatch = useDispatch();

  // Gets qualifying data
  const setQualifyingData = (qualifying) => {
    dispatch(setQualifying(qualifying));
  };

  // Gets race information
  const setRaceInfoData = (information) => {
    dispatch(setRaceInfo(information));
  }

  // Opens modal based on id and the type of modal clicked on
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
    // Api urls for race information (banner at top) and qualifying racer list
    let qualUrl = `${ApiEndpointEnum.GetQualifyingByRace}/${selectedRace}`
    let infoUrl = `${ApiEndpointEnum.GetRaceInformation}/${selectedRace}`
    fetch(infoUrl)
      .then(response => response.json())
      .then(data => {
        setRaceInfoData(data[0])
        console.log(data[0])
      });
    fetch(qualUrl)
      .then(response => response.json())
      .then(data => {
        setQualifyingData(data)
      });
  }, [selectedRace])

  return (
    <>
     {/* Gets information to make the banner at the top with information about the race */}
      <div className="box-column" id="column2">
        {raceInfo.name}, Round:{raceInfo.round}, {raceInfo.year}, {raceInfo.date}, {raceInfo.circuits ? `${raceInfo.circuits.name}, ` : ""}, {raceInfo.url}        <table style={{ "width": "100%" }}>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>driver name</th>
              <th style={{ "width": "25%" }}>constructor name</th>
              <th style={{ "width": "10%" }}>Q1</th>
              <th style={{ "width": "10%" }}>Q2</th>
              <th style={{ "width": "10%" }}>Q3</th>
            </tr>
          </thead>
          <tbody>
            {/* Creates a list of all quilifying racers with clickable links on constructors and drivers*/}
            {qualifying.message ? "" :
              qualifying.map((quali, index) => (
                <tr key={index}>
                  <td>{quali.position}</td>
                  <td><button className='link' onClick={() => setOpener(true, quali.drivers.driverId, ModalTypeEnum.DRIVER)}> {quali.drivers.forename +" " + quali.drivers.surname}</button></td>
                  <td><button className='link' onClick={() => setOpener(true, quali.constructors.constructorId, ModalTypeEnum.CONSTRUCTOR)}> {quali.constructors.name}</button></td>
                  <td>{quali.q1}</td>
                  <td>{quali.q2}</td>
                  <td>{quali.q3}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
