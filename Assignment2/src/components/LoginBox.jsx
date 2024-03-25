import React from "react";
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
          console.log("hello");
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