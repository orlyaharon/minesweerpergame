'use strict'

const MINE = '💣';


var gBoard;
var bordSize;
var gIsShown = true;
function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
    setMinesNegsCount(gBoard);
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

    // יש לשנות לאחר מכן את הנחת המוקשים באופן רנדומלי

    console.table(board);
    return board;
}


function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            // console.log(cell);
            var className = 'cell ' + i + '-' + j;
            console.log(className);

            strHTML += `\t<td class="cell ${className}"  onclick="cellClicked(elCell, i, j)"  >\n`;
            strHTML += `\t${cell}</td>\n`;
        }
        strHTML += '</tr>\n';
    }

    // console.log('strHTML is:');
    // console.log(strHTML);


    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
    return board;
}


function setMinesNegsCount(board) {
    console.log(board);
    var count = 0;
    for (var i = board[i] - 1; i <= board[i] + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = board[j] - 1; j <= board[j] + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue;
            if (i === board[i] && j === board[j]) continue;
            var currItem = board[i][j];
            console.log(currItem);
            if (currItem === MINE) currIte[i].minesAroundCount++;
        }
    }
    // console.log(count);
    // console.log(board);
    return count;
}



function cellClicked(elCell, i, j) {

}

// cellMarked(elCell) 

// checkGameOver()

// expandShown(board, elCell, i, j)
