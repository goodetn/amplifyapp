import React from 'react';
import logo from './logo512.png';
import './App.css';
import Contact from './templates/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contact name="tot" email="tottranrotate@gmail.com" site="toithietke.vn" />
      </header>
    </div>
  );
}

export default App;
