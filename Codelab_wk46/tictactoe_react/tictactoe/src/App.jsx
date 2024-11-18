import React, { useState } from 'react'; 
import Header from './components/Header';
import Board from './components/Board';
import PlayerTurn from './components/PlayerTurn';
import Footer from './components/Footer';
import './styles/Global.css';
import './styles/App.css';

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (cells[index]) return;

    const newCells = cells.slice();
    newCells[index] = isXNext ? 'X' : 'O';
    setCells(newCells);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div id="root">
      <Header />
      <PlayerTurn isXNext={isXNext} />
      <Board cells={cells} onClick={handleClick} />
      <button id="reset" onClick={resetGame}>Reset Game</button>
      <Footer />
    </div>
  );
}

export default App;