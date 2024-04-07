import { useSelector, useDispatch } from 'react-redux';
import { setCircuitFavourites, setDriverFavourites, setConstructorFavourites } from '../slices/favouritesSlice';
import { useEffect } from 'react';

export const FavoriteModal = () => {
  const favDrivers = useSelector((state) => state.favourite.driverFavourites);
  const favConstructors = useSelector((state) => state.favourite.constructorFavourites);
  const favCircuits = useSelector((state) => state.favourite.circuitFavourites);
  const dispatch = useDispatch(); // Dispatch function for Redux actions
  
  const clearFavorites = () => {
    dispatch(setDriverFavourites([]))
    dispatch(setCircuitFavourites([]))
    dispatch(setConstructorFavourites([]))
  }
  useEffect(() => {console.log("favs changed")}, [favDrivers, favCircuits, favConstructors])

  //Renders Favorites
  const renderData = () => {
      return (
        <>
         <div>
           {/* Table for displaying favorite drivers */}
           <div style={{"border": "1px solid #696969", "margin": "5px", "textAlign": "left"}}>
             <div style={{"padding": "10px"}}>Drivers </div><hr/>
             <ul>
               {/* lists drivers*/}
               {
                 favDrivers.map((driver, index) => (
                 <li key={index}>
                   {driver}
                 </li>
               ))}
             </ul>
           </div>
           {/* table for displaying favorite constructors */}
           <div style={{"border": "1px solid #696969", "margin": "5px", "textAlign": "left"}}>
             <div style={{"padding": "10px"}}>Constructors </div><hr/>
             <ul>
               {/* lists constructors*/}
               {
                 favConstructors.map((constructor, index) => (
                 <li key={index}>
                   {constructor}
                 </li>
               ))}
             </ul>
           </div>
           {/* Table for displaying favorite circuits */}
           <div style={{"border": "1px solid #696969", "margin": "5px", "textAlign": "left"}}>
             <div style={{"padding": "10px"}}>Circuits </div><hr/>
             <ul>
               {/* lists circuits*/}
               {
                 favCircuits.map((circuit, index) => (
                 <li key={index}>
                   {circuit}
                 </li>
               ))}
             </ul>
           </div>
         </div>
         <button onClick={() => clearFavorites()}> Clear Favorites</button>
         </>
      );
    
  };

  return (
    <>
      Favourites
      {renderData()}
    </>
  );
};
