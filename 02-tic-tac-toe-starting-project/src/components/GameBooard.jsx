export default function GameBoard() {
  return (
    <div>
      <div className="game-board">
        {[...Array(9)].map((_, index) => (
          <button key={index} className="cell">
            -
          </button>
        ))}
      </div>
    </div>
  );
}