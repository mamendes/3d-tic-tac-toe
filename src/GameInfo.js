import React, { Component } from 'react';
import './index.css';

class GameInfo extends Component  {

  renderArrow() {
    return (
      <span className="arrow" ref={e => {this.arrow = e}}> ⇦ </span>
    );
  }

  componentDidMount() {
    this.arrow.scrollIntoView();
  }

  componentDidUpdate() {
    this.arrow.scrollIntoView();
  }

  render() {
    return (
      <div className="game-info">
        <div className="height-100">
          <div className="game-status">
            <p>
              score: {
                this.props.draw ?
                  <span className="draw">
                    <b>DRAW</b>
                  </span> :
                this.props.winners && this.props.winners.score ?
                  <span className="winner">
                    {
                      Object.keys(this.props.winners.score).map(player => (
                        <span key={player} style={{display:'block'}}>
                          <b>{player}</b> ({this.props.winners.score[player]})
                        </span>
                      ))
                    }
                  </span> :  <span />
              }
            </p>
            <p>
              <span className="next-player">
                next player: <b>{this.props.xIsNext ? this.props.X : this.props.O}</b>
              </span>
            </p>
            <p>
              <button onClick={() => this.props.jumpTo(0)}>
                <span className="game-start">
                  Game start
                </span>
              </button>
              {this.props.pointer === 0 && this.renderArrow()}
            </p>
          </div>
          <div className="game-history">
            <ol>
              {
                this.props.history.slice(1).map((step,i) => {
                  const move = i + 1;
                  return (
                    <li key={move}>
                      <button onClick={() => this.props.jumpTo(move)}>
                        <span className="move">
                          move #{move}
                        </span>
                      </button>
                      {this.props.pointer === move && this.renderArrow()}
                    </li>
                  );
                })
              }
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default GameInfo;
