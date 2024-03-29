import { PageStateEnum } from '../enum/pageStateEnum';
import { RaceResult } from "./RaceResult";
import { RaceQualifying } from "./RaceQualifying";
import { RaceStanding } from "./RaceStanding";
import { setState } from '../slices/pageSlice';
import { useSelector, useDispatch } from 'react-redux';

export const DataSection = () => {
  const pageState = useSelector((state) => state.page.currentState);
  const dispatch = useDispatch();

  function decidePage() {
    switch (pageState) {
      case PageStateEnum.QUALIFYING:
        return <RaceQualifying />
      case PageStateEnum.RESULTS:
        return <RaceResult />
      case PageStateEnum.STANDINGS:
        return <RaceStanding />
      default:
        return <div> this is crazy, but here is my number </div>
    }
  }

  const setCurrentState = (state) => {
    dispatch(setState(Number(state)));
  };

  return (
    <div className="box-column" id="column2">
      <table style={{ "width": "100%" }}>
        <thead>
          <tr>
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.QUALIFYING)}>
              {
                pageState == Number(PageStateEnum.QUALIFYING) ?
                  <span>Qualifying</span>
                  : <a href="#" onClick={() => { return }}>
                    Qualifying
                  </a>
              }
            </th>
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.RESULTS)}>
              {
                pageState == Number(PageStateEnum.RESULTS) ?
                  <span>Results</span>
                  : <a href="#" onClick={() => { return }}>
                    Results
                  </a>
              }
            </th>
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.STANDINGS)}>
              {
                pageState == Number(PageStateEnum.STANDINGS) ?
                  <span>Standings</span>
                  : <a href="#" onClick={() => { return }}>
                    Standings
                  </a>
              }
            </th>
          </tr>
        </thead>
      </table>
      {decidePage()}
    </div>
  )
}
