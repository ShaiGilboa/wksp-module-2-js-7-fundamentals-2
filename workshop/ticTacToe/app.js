// tic tac toe
const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
];

const board = document.getElementById('board');
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');

const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';

let COUNTER = 0;

// game starts with player 1
let currentPlayer = '1';
player1.classList.toggle('active');

function togglePlayer() {
    currentPlayer = (currentPlayer === '1') ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

function itsAWin() {
    console.log(currentPlayer)
    board.removeEventListener('click', handleClick);
    alert(`player ${currentPlayer} win!`)
}

function verifyWin() {
    //rows
    if (game[0] === game[1] && game[1] === game[2]) itsAWin();
    if (game[3] === game[4] && game[4] === game[5]) itsAWin();
    if (game[6] === game[7] && game[7] === game[8]) itsAWin();
    //columns
    if (game[0] === game[3] && game[3] === game[6]) itsAWin();
    if (game[1] === game[4] && game[4] === game[7]) itsAWin();
    if (game[2] === game[5] && game[5] === game[8]) itsAWin();
    //diagonals
    if (game[0] === game[4] && game[4] === game[8]) itsAWin();
    if (game[2] === game[4] && game[4] === game[6]) itsAWin();
}

function handleClick(event) {
    const cell = event.target.id;
    const curretnCellDiv = document.getElementById(cell);
    const icon = (currentPlayer==='1') ? PLAYER_1_ICON : PLAYER_2_ICON;
    const cellId = cell.charAt(cell.length - 1);

    if (typeof(game[cellId]) === 'number') {
        curretnCellDiv.innerText = icon
        game[cellId] = icon;
        COUNTER ++;
        if (COUNTER < 9) {
        verifyWin();
        togglePlayer();
        } else {
            alert('IT IS A DRAW')
        }
    }
}


board.addEventListener('click', handleClick);
// 1. indicate who's turn it is.
// 2. cells to br clickable
//      / click adds value (X or O) to cell
//      / ** if full, not clickable
// 3. be able to clear the board (optional)
// 4. 2 players
//      / flag for current player
//      / each player is assigned either X or O
// 5. create an array of current cell values; 
//      / refresh on each change.
// 6. create all win conditions
//      / ...


