import React, { useState } from 'react';
import logo from './logo512.png';
import './App.css';
import Contact, { LatLngType } from './templates/contact';

function App() {
  const center: LatLngType = {
    lat: -3.745,
    lng: -38.523
  };

  const [state, setState] = useState(false);

  const login = () => {
    const id = setTimeout(() => {
      setState(prev => !prev);
    }, 3000);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          !state ? (
            <>
              <input data-test="sign-in-username-input" ></input>
              <input data-test="sign-in-password-input" ></input>
              <button data-test="sign-in-sign-in-button" onClick={login}>Sign In</button>
            </>
          ) : (
              <>
                Welcome to Global State!
              </>
          )
        }
      </header>
    </div>
  );
}

export default App;
