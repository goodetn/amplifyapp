import React from 'react';
import logo from './logo512.png';
import './App.css';
import Contact, { LatLngType } from './templates/contact';

function App() {
  const center: LatLngType = {
    lat: -3.745,
    lng: -38.523
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact
          name="tot"
          email="tottranrotate@gmail.com"
          site="toithietke.vn"
          center={center}
        />
      </header>
    </div>
  );
}

export default App;
