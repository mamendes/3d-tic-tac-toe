function calculateWinners(squares) {
  let winners = [];
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
  for (let i=0; i<4; i+=1) { // i: board index
    for (let k=0; k<lines.length; k+=1) {
      const [a,b,c,d] = lines[k]; // a,b,c,d: square indexes
      if (squares[i][a] && squares[i][a]===squares[i][b] && squares[i][a]===squares[i][c] && squares[i][a]===squares[i][d]) {
        winners.push({
          winner: squares[i][a],
          line: [[i,a],[i,b],[i,c],[i,d]]
        });
      }
    }
  }
  // diagonal lines from board 0 to 3
  for (let k=0; k<lines.length; k+=1) {
    const [x,y,z,t] = lines[k]; // x,y,z,t: square indexes
    const diagonals = [ [x,y,z,t] , [t,z,y,x] ];
    for (let r=0; r<diagonals.length; r+=1) {
      const [a,b,c,d] = diagonals[r];
      if (squares[0][a] && squares[0][a]===squares[1][b] && squares[0][a]===squares[2][c] && squares[0][a]===squares[3][d]) {
        winners.push({
          winner: squares[0][a],
          line: [[0,a],[1,b],[2,c],[3,d]]
        });
      }
    }
  }
  // vertical lines from board 0 to 3
  for (let j=0; j<16; j+=1) { // j: square index
    if (squares[0][j] && squares[0][j]===squares[1][j] && squares[0][j]===squares[2][j] && squares[0][j]===squares[3][j]) {
      winners.push({
        winner: squares[0][j],
        line: [[0,j],[1,j],[2,j],[3,j]],
      });
    }
  }
  // no winner or all winners with score
  winners.score = {};
  winners.forEach(function(winner,i,winners) {
    let player = winner.winner;
    !winners.score[player] && (winners.score[player]=0);
    winners.score[player] += 1;
  });
  return winners.length > 0 ? winners : null;
}

// function draw(squares) {
//   return [0,1,2,3].reduce((draw,board) =>
//     draw && squares[board].reduce((draw,square) =>
//       draw && square,true),true)
// }

export {
  calculateWinners
};
