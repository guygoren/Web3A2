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
    document.body.style.backgroundImage = 'url("/Hero.png")';
  };

  // Rendering based on login status
  return (
    <div>
      {!loggedIn ? (<LoginBox onActivate={handleActivate} />) : (<MainPage />)}

    </div>
  );
};

export default App
