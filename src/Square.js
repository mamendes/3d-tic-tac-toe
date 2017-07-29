import React, { Component } from 'react';
import './index.css';

class Square extends Component {
  render() {
    const i = this.props.i;
    const j = this.props.j;
    return (
      <button className="Square">
        {`${i},${j}`}
      </button>
    );
  }
}

export default Square;
