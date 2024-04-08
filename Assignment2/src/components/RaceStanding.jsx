// Renders page for race standings
import { useSelector, useDispatch } from 'react-redux';
import { setRaceInfo, setDriverStandings, setConstructorsStandings } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { setConstructorId } from '../slices/constructorSlice';
import { setDriverId } from '../slices/driverSlice';
import { ModalTypeEnum } from '../enum/modalTypeEnum';


export const RaceStanding = () => {
   // Gets variables from redux
  const driverStandings = useSelector((state) => state.race.driverStandings)
  const constructorsStandings = useSelector((state) => state.race.constructorsStandings)
  const selectedRace = useSelector((state) => state.race.selectedRace)
  const raceInfo = useSelector((state) => state.race.raceInfo)
  const dispatch = useDispatch();

  // sets race information (just to list round in this case)
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
  // Sets driver data
  const setDriverData = (driverStandings) => {
    dispatch(setDriverStandings(driverStandings));
  };
  // Sets constructor data
  const setConstructorsData = (constructorStandings) => {
    dispatch(setConstructorsStandings(constructorStandings))
  }

  // Apis calls for Race info, constructor info, and driver info
  useEffect(() => {
    let infoUrl = `${ApiEndpointEnum.GetRaceInformation}/${selectedRace}`
    let constructorUrl = `${ApiEndpointEnum.GetConstructorStandings}/${selectedRace}`
    let driverUrl = `${ApiEndpointEnum.GetDriverStandings}/${selectedRace}`
    fetch(constructorUrl)
      .then(response => response.json())
      .then(data => {
        setConstructorsData(data)
        console.log(data)
      });
    fetch(driverUrl)
      .then(response => response.json())
      .then(data => {
        setDriverData(data)
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
     {/* Lists the round at the top of the page */}
      <div className="box-column" id="column2">
        Standings after Round: {raceInfo.round}  <br /> <table style={{ "width": "45%", "float": "left", "padding": "10px" }}>
          {/* Creates one table to list driver information and lets you click on driver names */}
          <caption style={{ "padding": "10px" }}>Drivers</caption>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>name</th>
              <th style={{ "width": "10%" }}>points</th>
              <th style={{ "width": "10%" }}>wins</th>
            </tr>
          </thead>
          <tbody>
            {driverStandings.message ? "" :
              driverStandings.map((ds, index) => (
                <tr key={index}>
                  <td>{ds.position}</td>
                  <td><button className='link' onClick={() => setOpener(true, ds.drivers.driverId, ModalTypeEnum.DRIVER)}> {ds.drivers.forename + " " + ds.drivers.surname}</button></td>
                  <td>{ds.points}</td>
                  <td>{ds.wins}</td>
                </tr>
              ))}
          </tbody>

        </table>
        <table style={{ "width": "45%", "float": "right", "padding": "10px" }}>
          {/* Creates one table to list constructor information and lets you click on constructor names */}
          <caption style={{ "padding": "10px" }}>Constructors</caption>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>name</th>
              <th style={{ "width": "10%" }}>points</th>
              <th style={{ "width": "10%" }}>wins</th>
            </tr>
          </thead>
          <tbody>
            {constructorsStandings.message ? "" :
              constructorsStandings.map((cs, index) => (
                <tr key={index}>
                  <td>{cs.position}</td>
                  <td><button className='link' onClick={() => setOpener(true, cs.constructors.constructorId, ModalTypeEnum.CONSTRUCTOR)}> {cs.constructors.name}</button></td>
                  <td>{cs.points}</td>
                  <td>{cs.wins}</td>
                </tr>
              ))}
          </tbody>

        </table>
      </div>
    </>
  )
}
