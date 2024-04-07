import { useState } from 'react'
import './App.css'
import { LoginBox } from './components/LoginBox'
import { MainPage } from './components/MainPage'


export let LoggedIn = false
const App = props => {

  if (LoggedIn) {
    return (
      <MainPage />
    )
  }
  else {
    return (
      <LoginBox />
    )
  }
}

export default App