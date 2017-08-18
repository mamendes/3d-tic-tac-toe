import React, { Component } from 'react';
import Square from './Square.js';
import './index.css';

class Board extends Component {

  renderSquare(board,square) {
    return (
      <Square
        value={this.props.squares[square]}
        onClick={() => this.props.onClick(square)}
        winner={this.props.winnersLines.reduce((winner,winnerLine) => winner || winnerLine.reduce((winner,coords) => winner || (coords[0]===board &&  coords[1]===square), false), false)}
      />
    );
  }

  // winner={this.props.winnerLine.reduce((winner,coords) => winner || (coords[0]===board &&  coords[1]===square),false)}

  render() {
    const board = this.props.board;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(board,0)}
          {this.renderSquare(board,1)}
          {this.renderSquare(board,2)}
          {this.renderSquare(board,3)}
        </div>
        <div className="board-row">
          {this.renderSquare(board,4)}
          {this.renderSquare(board,5)}
          {this.renderSquare(board,6)}
          {this.renderSquare(board,7)}
        </div>
        <div className="board-row">
          {this.renderSquare(board,8)}
          {this.renderSquare(board,9)}
          {this.renderSquare(board,10)}
          {this.renderSquare(board,11)}
        </div>
        <div className="board-row">
          {this.renderSquare(board,12)}
          {this.renderSquare(board,13)}
          {this.renderSquare(board,14)}
          {this.renderSquare(board,15)}
        </div>
      </div>
    );
  }
}

export default Board;
