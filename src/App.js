import React, { Component } from 'react';
import Game from './Game.js';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="react-logo" />
          <p>3d-tic-tac-toe</p>
          <p>A JavaScript/React game by Marco A. Mendes</p>
        </div>
        <div className="App-game">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
