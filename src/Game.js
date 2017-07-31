import React, { Component } from 'react';
import Board from './Board.js';
import './index.css';

const X = 'x';
const O = 'o';

function calculateWinner(squares) {
  const lines = [
    [  0 ,  1 ,  2 ,  3 ],
    [  4 ,  5 ,  6 ,  7 ],
    [  8 ,  9 , 10 , 11 ],
    [ 12 , 13 , 14 , 15 ],
    [  0 ,  4 ,  8 , 12 ],
    [  1 ,  5 ,  9 , 13 ],
    [  2 ,  6 , 10 , 14 ],
    [  3 ,  7 , 11 , 15 ],
    [  0 ,  5 , 10 , 15 ],
    [  3 ,  6 ,  9 , 12 ],
  ];
  // horizontal lines in a board
  for (let i=0; i<4; i+=1) {
    for (let k=0; k<lines.length; k+=1) {
      const [a,b,c,d]  = lines[k];
      if (squares[i][a] && squares[i][a]===squares[i][b] && squares[i][a]===squares[i][c] && squares[i][a]===squares[i][d]) {
        return {
          winner: squares[i][a],
          line: [[i,a],[i,b],[i,c],[i,d]]
        };
      }
    }
  }
  // diagonal lines from board 0 to 3
  for (let k=0; k<lines.length; k+=1) {
    const [a,b,c,d]  = lines[k];
    if (squares[0][a] && squares[0][a]===squares[1][b] && squares[0][a]===squares[2][c] && squares[0][a]===squares[3][d]) {
      return {
        winner: squares[0][a],
        line: [[0,a],[1,b],[2,c],[3,d]]
      };
    }
  }
  // vertical lines from board 0 to 3
  for (let j=0; j<16; j+=1) {
    if (squares[0][j] && squares[0][j]===squares[1][j] && squares[0][j]===squares[2][j] && squares[0][j]===squares[3][j]) {
      return {
        winner: squares[0][j],
        line: [[0,j],[1,j],[2,j],[3,j]],
      };
    }
  }
  // no winner
  return null;
}

function draw(squares) {
  return [0,1,2,3].reduce((draw,i) => draw && squares[i].reduce((draw,square) => draw && square, true));
}


class Game extends Component {

  constructor() {
    super();
    this.state = {
      history: [{squares: Array(4).fill(Array(16).fill(null))}],
      xIsNext: true,
      pointer: 0
    };
  }

  handleClick(i,j) {
    const history = this.state.history.slice(0,this.state.pointer+1);
    const current = history[this.state.pointer];
    const squares = [0,1,2,3].map((n,i) => current.squares[i].slice());
    if (calculateWinner(squares) || squares[i][j])
      return;
    squares[i][j] = this.state.xIsNext ? X : O;
    this.setState({
      history: history.concat([{squares}]),
      xIsNext: !this.state.xIsNext,
      pointer: this.state.pointer+1
    });
  }

  junpTo(move) {
    this.setState({
      xIsNext: !(move%2),
      pointer: move
    });
  }

  renderBoard(i,winner) {
    const history = this.state.history;
    const current = history[this.state.pointer];
    return (
      <Board
        squares={current.squares[i]}
        winnerLine={winner ? winner.line : []}
        onClick={(j) => this.handleClick(i,j)}
        i={i}
      />
    );
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.pointer];
    const winner = calculateWinner(current.squares);
    const statusMSG =
      draw(current.squares) ?
        <span className="draw">draw</span> :
          winner ?
            <span className="winner">Winner: <b>{winner.winner}</b></span> :
            <span className="next-player">Next player: {this.state.xIsNext ? <b>{X}</b> : <b>{O}</b>}</span>
    ;
    const moves = history.map((step, move) => {
      const description = move ?
        <span className="move">move #{move}</span> :
        <span className="game-start">Game start</span>
      ;
      return (
        <li>
          <button key={move} onClick={() => this.junpTo(move)}>{description}</button>
          {this.state.pointer === move ? <span className="arrow">⇦</span> : <span></span>}
        </li>
      );
    });
    return (
      <div className="Game">
        <div className="game-3d-board">
          <div className="game-board">
            {this.renderBoard(0,winner)}
          </div>
          <div className="game-board">
            {this.renderBoard(1,winner)}
          </div>
          <div className="game-board">
            {this.renderBoard(2,winner)}
          </div>
          <div className="game-board">
            {this.renderBoard(3,winner)}
          </div>
        </div>
        <div className="game-info">
          <div className="height-100">
            <div className="game-status">{statusMSG}</div>
            <div className="game-history">
              <ol start="0">{moves}</ol>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Game;
