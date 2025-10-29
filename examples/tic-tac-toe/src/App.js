import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="board-row">
        {squares.slice(0, 3).map((val, i) => (
          <Square key={i} value={val} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((val, i) => (
          <Square key={i + 3} value={val} onSquareClick={() => handleClick(i + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((val, i) => (
          <Square key={i + 6} value={val} onSquareClick={() => handleClick(i + 6)} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
