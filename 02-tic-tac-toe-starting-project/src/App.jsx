import Player from "./components/player" 
import GameBoard from "./components/GameBooard"

function App() {
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player name= "Player 1" symbol="X" />
          <Player name= "Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App

