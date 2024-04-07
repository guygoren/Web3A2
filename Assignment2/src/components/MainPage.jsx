// Mainpage which calls all the components
import { Header } from "./Header"
import { RaceList } from "./RaceList"
import { DataSection } from "./DataSection"
import { useSelector, useDispatch } from 'react-redux';
import "../styles/MainPage.css"
import { useEffect } from 'react';

export const MainPage = () => {
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
  useEffect(() => {console.log("page loaded")}, [Selected])
  return (
    <div>
      <Header />
      {renderData()}
    </div>
  )

}
