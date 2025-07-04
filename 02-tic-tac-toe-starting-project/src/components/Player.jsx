import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing && playerName.trim() !== initialName) {
      onChangeName(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let playerContent = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    playerContent = (
      <input type="text" required value={playerName} onChange={handleNameChange} />
    );
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
