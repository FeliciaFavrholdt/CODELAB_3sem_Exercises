// Game Variables
let board = Array(9).fill(null);
let currentPlayer = 'X';
let isGameActive = true; // Game is active by default

// DOM Elements
const cells = document.querySelectorAll('.cell');
const gameInfo = document.getElementById('game-info');
const resetButton = document.getElementById('reset');

// Winning Combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    // Only allow click if cell is empty and game is active
    if (board[index] === null && isGameActive) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        checkForWin(); // Check for a win after updating the cell

        // Only toggle the player if the game is still active
        if (isGameActive) {
            togglePlayer();
        }
    }
}

// Function to toggle player turn
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateGameInfo();
}

// Function to update game information display
function updateGameInfo() {
    gameInfo.innerText = isGameActive ? `Player ${currentPlayer}'s turn` : `Player ${currentPlayer} wins!`;
}

// Function to check for win or draw
function checkForWin() {
    // Check each winning combination
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            highlightWinningCells(combination);
            gameInfo.innerText = `Player ${currentPlayer} wins!`;
            return;
        }
    }

    // Check for draw
    if (board.every(cell => cell !== null)) {
        isGameActive = false;
        gameInfo.innerText = "It's a draw!";
    }
}

// Function to highlight winning cells
function highlightWinningCells(cells) {
    cells.forEach(index => document.querySelector(`.cell[data-index="${index}"]`).style.backgroundColor = '#a5d6a7');
}

// Function to reset the game
function resetGame() {
    board.fill(null);
    currentPlayer = 'X';
    isGameActive = true;
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#ffffff';
    });
    updateGameInfo();
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Initial Game Info Update
updateGameInfo();