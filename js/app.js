'use strict'

const MINE = '💣';
const FLAG = '🚩';

var gBoard;
var bordSize;
var gTime = 0;
var setTimeInterval;

var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
    // setTime();
}

function buildBoard(height = 4, width = 4) {
    var board = [];
    for (var i = 0; i < height; i++) {
        board[i] = [];
        for (var j = 0; j < width; j++) {
            var cell = {
                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: true,

            };
            board[i][j] = cell;
        }
    }
    board[getRandomIntInclusive(0, 3)][getRandomIntInclusive(0, 3)].isMine = true;
    board[getRandomIntInclusive(0, 3)][getRandomIntInclusive(0, 3)].isMine = true;
    console.table(board);
    return board;
}


function renderBoard(board) {
    // debugger
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var pos = { i: i, j: j }
            var neighbours = setMinesNegsCount(pos);
            var cell = board[i][j];
            cell.minesAroundCount = neighbours;
            var className = i + '-' + j;
            
            strHTML += `<td class="cell ${className}"  onclick="cellClicked(${cell}, ${pos})"  >`;
            if (cell.isMine) {
                strHTML += `💣</td>`
            }
            if (cell.minesAroundCount) {
                strHTML += `${neighbours}</td>`;
            } else {
                continue;
            }
            console.log(cell);
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    return board;
}


function setMinesNegsCount(pos) {
    var count = 0;
    for (var i = pos.i - 1; i <= pos.i + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = pos.j - 1; j <= pos.j + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue;
            if (i === pos.i && j === pos.j) continue;
            var currCell = gBoard[i][j];
            if (currCell.isMine) count++;
        }
    }
    // console.log(gBoard);
    return count;
}


function cellClicked(elCell, pos) {
    // console.log(ev);
    console.log(elCell);
    // if(ev.which === 3){
    //  console.log("Right mouse button clicked on element with id myId");
    // }

    // window.oncontextmenu = function () {
    //     if (ev.which === 3)
    //         elCell.innerHTML = '🚩';
    // }
}

    // checkIfGameOver();
//     // if (!elCell.isShown && elCell.classList.contains('cell')) elCell.style.display = "none";
// }

// cellMarked(elCell) 

// checkIfGameOver(){
//     stop();
// }

// expandShown(board, elCell, i, j)

// function stopwatch() {
//     var elTimer = document.querySelector('.timer');
//     elTimer.innerHTML = gTime;
//     gTime++
// }

// function setTime() {
//     setTimeInterval = setInterval(stopwatch, 1000);
// }

// function stop() {
//     clearInterval(setTimeInterval);
// }


// function getLavel(elBtn) {
//     console.log(elBtn);
//     var levelSelected = elBtn.innerText;
//     if (levelSelected === 'Extreme!') {
//         bordSize = 144;
//     } else if (levelSelected === 'Hard') {
//         bordSize = 64;
//     } else {
//         bordSize = 16;
//     }
//     renderBoard();
// }