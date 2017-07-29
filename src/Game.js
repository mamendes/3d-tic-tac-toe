import React, { Component } from 'react';
import Board from './Board.js';
import './index.css';

class Game extends React.Component {

  renderBoard(i,j) {
    return <Board i={i} />
  }

  render() {
    return (
      <div className="Game">
        <div className="game-3d-board">
          <div className="game-board">
              {this.renderBoard(0)}
          </div>
          <div className="game-board">
            {this.renderBoard(1)}
          </div>
          <div className="game-board">
            {this.renderBoard(2)}
          </div>
          <div className="game-board">
            {this.renderBoard(3)}
          </div>
        </div>
        <div className="game-info">
          {'game status'}
        </div>
    </div>
    );
  }
}

export default Game;
