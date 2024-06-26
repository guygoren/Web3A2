// Renders page for race results
import { useSelector, useDispatch } from 'react-redux';
import { setRaceInfo, setRaceResults } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';
import { setConstructorId } from '../slices/constructorSlice';
import { setDriverId } from '../slices/driverSlice';
import { setIsOpen, setModalType } from '../slices/modalSlice';
import { ModalTypeEnum } from '../enum/modalTypeEnum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const RaceResult = () => {
  const results = useSelector((state) => state.race.raceResults)
  const selectedRace = useSelector((state) => state.race.selectedRace)
  const raceInfo = useSelector((state) => state.race.raceInfo)
  const dispatch = useDispatch();

  // Gets results data
  const setResultsData = (results) => {
    dispatch(setRaceResults(results));
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
        // Api urls for race information (banner at top) and the race results list
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

  // Creates emojis for first, second and third place to make the podium standings pop more
  let renderPosition = (pos) => {
    console.log(pos)
    switch (pos) {
      case "1":
        return <EmojiEventsIcon style={{ color: '#FFE867' }} />;
      case "2":
        return <EmojiEventsIcon style={{ color: '#C2C2C2' }} />;
      case "3":
        return <EmojiEventsIcon style={{ color: '#9E683C' }} />;
      case null:
        return <span>DNF</span>;
      default:
        return <span>{pos}</span>;
    }
  }
  return (
    <>
    {/* Gets information to make the banner at the top with information about the race */}
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
            {/* Creates a list of driver standings with clickable links for drivers and constructors */}
            {results.message ? "" :
              results.map((res, index) => (
                <tr key={index}>
                  <td>{renderPosition(res.position)}</td>
                  <td><button className='link' onClick={() => setOpener(true, res.drivers.driverId, ModalTypeEnum.DRIVER)}> {res.drivers.forename +" " + res.drivers.surname}</button></td>
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
