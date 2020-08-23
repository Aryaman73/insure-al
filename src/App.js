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
          <div>
            <h3 id="mainTitle">   Hey! 👋 This is Insur-Al, your friendly Insurance Advisor!    </h3>
          </div>
          <Chatbot />
        </header>
      </div>
      </div>
  );
}

export default App;
