import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hi! I'm Lucas Ferreira, a Frontend Web Developer!
        </h1>
        <p>
          And I like to build web pages with
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          ReactJS
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
