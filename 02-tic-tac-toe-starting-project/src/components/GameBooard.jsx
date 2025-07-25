
import { useState } from 'react';

const initalGameBoard =[
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
]

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initalGameBoard);
  
  function handleSelectSquare(rowIndex, colIndex) {
    // Logic to handle square selection
    console.log(`Selected square at row ${rowIndex}, column ${colIndex}`);
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
          
        </li>
      ))}
    </ol>
  );
}