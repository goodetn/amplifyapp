import React from 'react';
import logo from './logo512.png';
import './App.css';
import MapComponent from './components/map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MapComponent />
      </header>
    </div>
  );
}

export default App;
