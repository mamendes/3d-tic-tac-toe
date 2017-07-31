import React from 'react';
import './index.css';

function Square(props) {
  const winner = props.winner ? ' winner' : '';
  return (
    <button className={`Square${winner}`} onClick={props.onClick}>
      {props.value}
      {/* {`${i},${j}`} */}
    </button>
  );
}

export default Square;
