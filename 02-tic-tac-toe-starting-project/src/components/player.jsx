import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEdit() {
        setIsEditing((prev) => !prev);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerContent = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerContent = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    return (
        <li>
            <span className="player">
                {playerContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
