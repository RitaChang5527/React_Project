
import { useState } from 'react';
import Player from './components/Player.jsx';

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });

  function handleNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));
  }

  return (
    <main id="game-container">
      <h1>React Tic-Tac-Toe</h1>
      <ol id="players">
        <Player
          initialName={players.X}
          symbol="X"
          isActive={true}
          onChangeName={handleNameChange}
        />
        <Player
          initialName={players.O}
          symbol="O"
          onChangeName={handleNameChange}
        />
      </ol>
    </main>
  );
}

export default App;
