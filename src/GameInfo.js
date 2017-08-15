import React, { Component } from 'react';
import './index.css';


class GameInfo extends Component  {

  pixelsToScroll() {
    let {offsetHeight: hdHeight} = this.historyDiv;
    let {offsetHeight: hlHeight} = this.historyList;
    let ΔHeight = hdHeight - hlHeight;
    return ΔHeight < 0 ? -ΔHeight : 0;
  }

  renderArrow() {
    return (
      <span className="arrow"> ⇦ </span>
    );
  }

  componentDidMount() {
    this.historyDiv.scrollTop += this.pixelsToScroll();
  }

  componentDidUpdate() {
    this.historyDiv.scrollTop += this.pixelsToScroll();
  }

  render() {
    return (
      <div className="game-info">
        <div className="height-100">
          <div className="game-status">
            <p>
              {
                this.props.draw ?
                  <span className="draw">
                    <b>DRAW</b>
                  </span> :
                this.props.winner ?
                  <span className="winner">
                    Winner: <b>{this.props.winner.winner}</b>
                  </span> :
                  <span className="next-player">
                    Next player: <b>{this.props.xIsNext ? this.props.X : this.props.O}</b>
                  </span>
              }
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
          <div className="game-history" ref={e => {this.historyDiv = e}}>
            <ol ref={e => {this.historyList = e}}>
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
