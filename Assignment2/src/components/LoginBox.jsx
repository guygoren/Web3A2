//
import '../styles/LoginBox.css'

// onActivate switches the page from login to main page
export const LoginBox = ({ onActivate }) => {
  var style = window.getComputedStyle(document.body);
  var backgroundImage = style.backgroundImage;
  
  console.log(backgroundImage);

  // The only button that does anything is the login button
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
        Login
      </button>
      <button>
        Register
      </button>
      </div>
  );
}