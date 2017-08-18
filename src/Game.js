import React, { Component } from 'react';
import Board from './Board.js';
import GameInfo from './GameInfo.js';
import { calculateWinners } from './helpers.js';
import './index.css';

const X = 'x';
const O = 'o';

class Game extends Component {

  constructor() {
    super();
    this.state = {
      history: [{squares: Array(4).fill(Array(16).fill(null))}],
      xIsNext: true,
      pointer: 0
    };
  }

  handleClick(board,square) { // i: board index; j: square index
    const history = this.state.history.slice(0,this.state.pointer+1);
    const current = history[this.state.pointer];
    const squares = [0,1,2,3].map((n,board) => current.squares[board].slice());
    // if (calculateWinners(squares) || squares[board][square])
    if (squares[board][square])
      return;
    squares[board][square] = this.state.xIsNext ? X : O;
    this.setState({
      history: history.concat([{squares}]),
      xIsNext: !this.state.xIsNext,
      pointer: this.state.pointer+1
    });
  }

  jumpTo(move) {
    this.setState({
      xIsNext: !(move%2),
      pointer: move
    });
  }

  renderBoard(board,winners) {
    const history = this.state.history;
    const current = history[this.state.pointer];
    return (
      <Board
        squares={current.squares[board]}
        winnersLines={winners ? winners.reduce((lines,winner) => {lines.push(winner.line); return lines}, []) : []}
        onClick={square => this.handleClick(board,square)}
        board={board}
      />
    );
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.pointer];
    const winners = calculateWinners(current.squares);
    return (
      <div className="Game">
        <div className="game-3d-board">
          <div className="game-board">
            {this.renderBoard(0,winners)}
          </div>
          <div className="game-board">
            {this.renderBoard(1,winners)}
          </div>
          <div className="game-board">
            {this.renderBoard(2,winners)}
          </div>
          <div className="game-board">
            {this.renderBoard(3,winners)}
          </div>
        </div>
        <GameInfo
          X={X}
          O={O}
          winners={winners}
          draw={!winners && this.state.pointer===64}
          history={history}
          xIsNext={this.state.xIsNext}
          pointer={this.state.pointer}
          jumpTo={move => this.jumpTo(move)}
        />
      </div>
    );
  }
}

export default Game;
