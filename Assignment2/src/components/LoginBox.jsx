import React from "react";
import { LoggedIn } from "../App";
export const LoginBox = () => {
  return (
    <div>
      <h1>Login</h1>
      <label>
        Email: <input name="myInput" /><br />
        Password: <input name="myInput" /> <br />
      </label>
      <button
        onClick={() => {
          LoggedIn = true;
        }
        }
      >
        Hello
      </button>
      <button>
        Register
      </button>
    </div>
  );
}