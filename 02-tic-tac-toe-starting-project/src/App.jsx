import{ useState } from "react"

import Player from "./components/player" 
import GameBoard from "./components/GameBooard"

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    // 紀錄這回合
    setGameTurns((prevTurns) => [
      ...prevTurns,
      { player: activePlayer, row: rowIndex, col: colIndex },
    ]);

    // 換人
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <div id="game-container">
        <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#fcd256' }}>
          Current Turn: Player {activePlayer}
        </p>
        <ol id="players" className="highlight-player">
          <Player initalName= "Player 1" symbol="X"  isActive={activePlayer=== "X"}/>
          <Player initalName= "Player 2" symbol="O" isActive={activePlayer=== "O"}/>
        </ol>
        <GameBoard
          activePlayer={activePlayer}
          onSquareSelected={handleSelectSquare}
        />
        {/* 🆕 加入回合紀錄畫面 */}
        <ul id="log">
          {gameTurns.map((turn, index) => (
            <li key={index}>
              Turn {index + 1}: Player {turn.player} selected [{turn.row}, {turn.col}]
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App

