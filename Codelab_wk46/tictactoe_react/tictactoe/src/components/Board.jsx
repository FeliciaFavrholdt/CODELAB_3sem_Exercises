import Cell from './Cell';

//cells is an array of 9 elements, each element is either 'X', 'O' or null
//onClick is a function that takes an index as an argument and is called when a cell is clicked
function Board({ cells, onClick }) { 
  return (
    <div id="board">
      {cells.map((value, index) => ( 
        <Cell key={index} value={value} onClick={() => onClick(index)} /> 
        //A click handler is passed to the Cell component.
        //When the cell is clicked, the onClick function (from the Board's props) is called with the index of the clicked cell.
        //This allows the parent component to know which cell was clicked and update the game state accordingly.
      ))}
    </div>
  );
}

export default Board;