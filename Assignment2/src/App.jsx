import { useState } from 'react'
import './App.css'
import { LoginBox } from './components/LoginBox'
import { MainPage } from './components/MainPage'



const App = () => {
  // State to track login status
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle activation
  const handleActivate = () => {
    setLoggedIn(true); // Set loggedIn to true when activated
    console.log("yeah")
    document.body.style.backgroundImage = 'url("./src/styles/vyj3h49915t41.png")';
  };

  // Rendering based on login status
  return (
    <div>
      {!loggedIn ? (<LoginBox onActivate={handleActivate} />) : (<MainPage />)}

    </div>
  );
};

export default App
