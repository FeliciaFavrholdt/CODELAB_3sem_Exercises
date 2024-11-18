function PlayerTurn({ isXNext }) {
  return (
    <div id="game-info">
      Player {isXNext ? 'X' : 'O'}'s turn
    </div>
  );
}

export default PlayerTurn;