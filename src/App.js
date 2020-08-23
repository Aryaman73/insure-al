import React from 'react';
import logo from './logo.svg';
import './App.css';

import Chatbot from './mybot';


function App() {
  return (
      <div id = "wrapper">
      <div id="bg"> </div>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Chatbot />
          <p>
            Hey! This is Insure-Al, your friendly Insurance Advisor! 
          </p>
        </header>
      </div>
      </div>
  );
}

export default App;
