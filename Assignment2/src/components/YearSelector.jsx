import React from 'react'
import Select from 'react-select'

const options = [

]

function makeYears() {
    for (let year = 2000; year <= 2023; year++) {
        options.push(year);
      }
      console.log(options);
}  

export const YearSelector = () => {
    
  

    return(
        <div>
        <h1>Favorite List</h1>
        <ul className="flex-list">
          {makeYears()}
        </ul>
      </div>
    )

  
}

