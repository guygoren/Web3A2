import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setQualifying } from '../slices/raceSlice';
import { useEffect } from 'react';
import { ApiEndpointEnum } from '../enum/apiEndpointEnum';

export const RaceQualifying = () => {
  const qualifying = useSelector((state) => state.race.qualifying);
  const selectedRace = useSelector((state) => state.race.selectedRace)
  const dispatch = useDispatch();

  const setQualifyingData = (qualifying) => {
    dispatch(setQualifying(qualifying));
  };

  useEffect(() => {
    let url = `${ApiEndpointEnum.GetQualifyingByRace}/${selectedRace}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setQualifyingData(data)
      });
  }, [selectedRace])

  return (
    <>
      <div className="box-column" id="column2">
        <table style={{ "width": "100%" }}>
          <thead>
            <tr>
              <th style={{ "width": "5%" }}>Pos</th>
              <th style={{ "width": "25%" }}>&nbsp;</th>
              <th style={{ "width": "25%" }}>&nbsp;</th>
              <th style={{ "width": "10%" }}>Q1</th>
              <th style={{ "width": "10%" }}>Q2</th>
              <th style={{ "width": "10%" }}>Q3</th>
            </tr>
          </thead>
          <tbody>
            {qualifying.message ? "" :
              qualifying.map((quali, index) => (
              <tr key={index}>
                <td>{quali.position}</td>
                <td>{quali.drivers.forename} {quali.drivers.surname}</td>
                <td>{quali.constructors.name}</td>
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
