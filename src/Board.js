import React, { Component } from 'react';
import Square from './Square.js';
import './index.css';

class Board extends Component {

  renderSquare(i,j) {
    return (
      <Square
        value={this.props.squares[j]}
        onClick={() => this.props.onClick(j)}
        winner={this.props.winnerLine.reduce((winner,coords) => winner || (coords[0]===i &&  coords[1]===j), false)}
      />
    );
  }

  render() {
    const i = this.props.i;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(i,0)}
          {this.renderSquare(i,1)}
          {this.renderSquare(i,2)}
          {this.renderSquare(i,3)}
        </div>
        <div className="board-row">
          {this.renderSquare(i,4)}
          {this.renderSquare(i,5)}
          {this.renderSquare(i,6)}
          {this.renderSquare(i,7)}
        </div>
        <div className="board-row">
          {this.renderSquare(i,8)}
          {this.renderSquare(i,9)}
          {this.renderSquare(i,10)}
          {this.renderSquare(i,11)}
        </div>
        <div className="board-row">
          {this.renderSquare(i,12)}
          {this.renderSquare(i,13)}
          {this.renderSquare(i,14)}
          {this.renderSquare(i,15)}
        </div>
      </div>
    );
  }
}

export default Board;
