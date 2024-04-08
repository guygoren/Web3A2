// Mainpage which calls all the components
import { Header } from "./Header"
import { RaceList } from "./RaceList"
import { DataSection } from "./DataSection"
import { useSelector, useDispatch } from 'react-redux';
import "../styles/MainPage.css"
import { useEffect } from 'react';


export const MainPage = () => {
  // Determines if a year was selected to render the rest of the page (not just the header)
  const Selected = useSelector((state) => state.year.wasSelected);
  

  const renderData = () =>{
    if(Selected){
      
      return(
        <div className="main-columns">
        <RaceList />
        <DataSection />
      </div>
      )
    }  
  }
  // Renders just the header when the page is loaded
  useEffect(() => {console.log("page loaded")}, [Selected])
  return (
    <div>
      <Header />
      {renderData()}
    </div>
  )

}
