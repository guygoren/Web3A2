import React, { useState } from 'react';
import '../styles/LoginBox.css'
export const LoginBox = ({ onActivate }) => {
  var style = window.getComputedStyle(document.body);
  var backgroundImage = style.backgroundImage;
  
  console.log(backgroundImage);
  return (
    <div className='login'>
      <h1>Login</h1>
      <label>
        Email: <input name="myInput" /><br />
        Password: <input name="myInput" /> <br />
      </label>
      <button
        onClick={onActivate}
      >
        Hello
      </button>
      <button>
        Register
      </button>
      </div>
  );
}