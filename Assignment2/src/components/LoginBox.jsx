import React, { useState } from 'react';

export const LoginBox = ({ onActivate }) => {
  return (
    <div>
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