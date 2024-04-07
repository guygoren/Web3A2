// renders content based on the selected tab
import { PageStateEnum } from '../enum/pageStateEnum';
// imports result, qualifying and standing components
import { RaceResult } from "./RaceResult";
import { RaceQualifying } from "./RaceQualifying";
import { RaceStanding } from "./RaceStanding";
import { setState } from '../slices/pageSlice';
import { useSelector, useDispatch } from 'react-redux';

export const DataSection = () => {
  const pageState = useSelector((state) => state.page.currentState);
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to render content based on current page tab
  function decidePage() {
    switch (pageState) {
      case PageStateEnum.QUALIFYING:
        return <RaceQualifying />; // Render qualifying tab
      case PageStateEnum.RESULTS:
        return <RaceResult />; // Render results tab
      case PageStateEnum.STANDINGS:
        return <RaceStanding />; // Render standing tab
      default:
        return <div> this is crazy, but here is my number </div>; // shows if no data found
    }
  }

  // Function to set the current page tab in slice
  const setCurrentState = (state) => {
    dispatch(setState(Number(state)));
  };

  return (
    <div className="box-column" id="column2">
      <table style={{ "width": "100%" }}>
        <thead>
          <tr>
            {/* Table headers for different page states */}
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.QUALIFYING)}>
              {
                // Qualifying tab
                pageState === Number(PageStateEnum.QUALIFYING) ?
                  <span>Qualifying</span> :
                  <a href="#" onClick={() => { return }}>
                    Qualifying
                  </a>
              }
            </th>
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.RESULTS)}>
              {
                // Results tab
                pageState === Number(PageStateEnum.RESULTS) ?
                  <span>Results</span> :
                  <a href="#" onClick={() => { return }}>
                    Results
                  </a>
              }
            </th>
            <th style={{ "width": "33%" }} onClick={() => setCurrentState(PageStateEnum.STANDINGS)}>
              {
                // standings tab
                pageState === Number(PageStateEnum.STANDINGS) ?
                  <span>Standings</span> :
                  <a href="#" onClick={() => { return }}>
                    Standings
                  </a>
              }
            </th>
          </tr>
        </thead>
      </table>
      {/* Rendering content based on current page state */}
      {decidePage()}
    </div>
  )
}
