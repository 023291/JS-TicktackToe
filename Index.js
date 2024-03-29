/*Tic Tac Toe


Storage of board spot
Empty = 'empty'
X = 'x'
O = 'o'
*/


var board = { 
    spot1: 'empty',
    spot2: 'empty',
    spot3: 'empty',
    spot4: 'empty',
    spot5: 'empty',
    spot6: 'empty',
    spot7: 'empty',
    spot8: 'empty',
    spot9: 'empty'
}

var game = {
    board: board,
    p1Score: 0,
    p2Score: 0,
    turn: 0,
    lastWinner: 0,
}


function start () {
    vLine(130, 0, 130, 800);
    vLine(270, 0, 270, 800);
    hLine(0, getWidth() / 2.7, 400, getWidth() / 2.7);
    hLine(0, getWidth() / 1.3, 400, getWidth() / 1.3);
    play();
}

function reset(winner) {
    for (var i = 1; i <= 9; i++) {
        board['spot' + i] = 'empty';
        console.log('clered')
    }
    removeAll();
    if (game.lastwinner == 'O') {
        game.turn = 0
    } else {
        game.turn = 1
        
    }
    console.log(board)
    start();
}

function winCheck() {
    let winner = 'midGame'
    console.log(board);
    if (board.spot1 == 'X' && board.spot2 == 'X' && board.spot3 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot4 == 'X' && board.spot5 == 'X' && board.spot6 == 'X')  {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot7 == 'X' && board.spot8 == 'X' && board.spot9 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot1 == 'O' && board.spot2 == 'O' && board.spot3 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot4 == 'O' && board.spot5 == 'O' && board.spot6 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot7 == 'O' && board.spot8 == 'O' && board.spot9 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot1 == 'X' && board.spot4 == 'X' && board.spot7 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot2 == 'X' && board.spot5 == 'X' && board.spot8 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot3 == 'X' && board.spot6 == 'X' && board.spot9 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot1 == 'O' && board.spot4 == 'O' && board.spot7 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot2 == 'O' && board.spot5 == 'O' && board.spot8 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot3 == 'O' && board.spot6 == 'O' && board.spot9 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot1 == 'X' && board.spot5 == 'X' && board.spot9 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot3 == 'X' && board.spot5 == 'X' && board.spot7 == 'X') {
        winner = 'X';
        game.p1score += 1
    } else if (board.spot1 == 'O' && board.spot5 == 'O' && board.spot9 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot3 == 'O' && board.spot5 == 'O' && board.spot7 == 'O') {
        winner = 'O';
        game.p2score += 1
    } else if (board.spot1 != 'empty' && board.spot2 != 'empty' && board.spot3 != 'empty' && board.spot4 != 'empty' && board.spot5 != 'empty' && board.spot6 != 'empty' && board.spot7 != 'empty' && board.spot8 != 'empty' && board.spot9 != 'empty') {
        alert('its a draw');
        reset('draw')
    }
    
    if (winner != 'midGame' && winner != 'draw') {
        alert(`${winner} wins!`)
        reset(winner)
    }
}


function play() {
    mouseClickMethod(clickMethod);
    
}

function clickMethod(e) {
    var pos = getpos(e);
    console.log(pos);
    
    if (game.turn == 0) {
        if (board['spot' + pos] == 'X' || board['spot' + pos] == 'O') {
            
        } else {
            drawO(pos);
            game.turn = 1;
            board['spot' + pos] = 'O';
            console.log(board['spot' + pos]);
            winCheck();
        }
        
        
    } else if (game.turn == 1) {
        if (board['spot' + pos] == 'X' || board['spot' + pos] == 'O') {
            
        } else {
            drawX(pos);
            game.turn = 0;
            board['spot' + pos] = 'X';
            console.log(board['spot' + pos]);
            winCheck();
        }
    }
}


function getpos(e) {
    console.log(`${e.getX()} X and ${e.getY()} y`);
    
    let row = 'err';
    let coll = 'err';
    let pos = 'err';
    
    if (e.getX() <= 130) {
        coll = 1;
    } else if (e.getX() <= 270 && e.getX() >= 130) {
        coll = 2;
    } else {
        coll = 3;
    }
    
    if (e.getY() <= getWidth() / 2.7) {
        row = 1;
    } else if (e.getY() >= getWidth() / 2.7 && e.getY() <= getWidth() / 1.3 ) {
        row = 2;
    } else {
        row = 3;
    }
    
    if (coll == 1 && row == 1) {
        pos = 1;
        return pos;
    } else if (coll == 2 && row == 1) {
        pos = 2;
        return pos;
    } else if (coll == 3 && row == 1) {
        pos = 3;
        return pos;
    } else if (coll == 1 && row == 2) {
        pos = 4;
        return pos;
    } else if (coll == 2 && row == 2) {
        pos = 5;
        return pos;
    } else if (coll == 3 && row == 2) {
        pos = 6;
        return pos;
    } else if (coll == 1 && row == 3) {
        pos = 7;
        return pos;
    } else if (coll == 2 && row == 3) {
        pos = 8;
        return pos;
    } else if (coll == 3 && row == 3) {
        pos = 9;
        return pos;
    }
    
}


function vLine(x1, y1, x2, y2) {
    var vLine = new Line(x1, y1, x2, y2);
    vLine.setLineWidth(4);
    vLine.setColor(Color.black);
    add(vLine);
}

function hLine(x1, y1, x2, y2) {
    var hLine = new Line(x1, y1, x2, y2);
    hLine.setLineWidth(4);
    hLine.setColor(Color.black);
    add(hLine);
}


function drawO (pos) {
    var oText = new Text('O', "80pt Arial");
    if (pos == 1) {
        oText.setPosition(getWidth() / 6 - oText.getWidth() / 2, getHeight() / 3 - oText.getHeight() / 2);
    } else if (pos == 2) {
        oText.setPosition(getWidth() / 2 - oText.getWidth() / 2, getHeight() / 3 - oText.getHeight() / 2);
    } else if (pos == 3) {
        oText.setPosition(getWidth() * 5/6 - oText.getWidth() / 2, getHeight() / 3 - oText.getHeight() / 2);
    } else if (pos == 4) {
        oText.setPosition(getWidth() / 6 - oText.getWidth() / 2, getHeight() * 2/3 - oText.getHeight() / 2);
    } else if (pos == 5) {
        oText.setPosition(getWidth() / 2 - oText.getWidth() / 2, getHeight() * 2/3 - oText.getHeight() / 2);
    } else if (pos == 6) {
        oText.setPosition(getWidth() * 5/6 - oText.getWidth() / 2, getHeight() * 2/3 - oText.getHeight() / 2);
    } else if (pos == 7) {
        oText.setPosition(getWidth() / 6 - oText.getWidth() / 2, getHeight() * 1 - oText.getHeight() / 2);
    } else if (pos == 8) {
        oText.setPosition(getWidth() / 2 - oText.getWidth() / 2, getHeight() * 1 - oText.getHeight() / 2);
    } else if (pos == 9) {
        oText.setPosition(getWidth() * 5/6 - oText.getWidth() / 2, getHeight() * 1 - oText.getHeight() / 2);
    }
    add(oText);
};

function drawX (pos) {
    var xText = new Text('X', "80pt Arial");
    if (pos == 1) {
        xText.setPosition(getWidth() / 6 - xText.getWidth() / 2, getHeight() / 3 - xText.getHeight() / 2);
    } else if (pos == 2) {
        xText.setPosition(getWidth() / 2 - xText.getWidth() / 2, getHeight() / 3 - xText.getHeight() / 2);
    } else if (pos == 3) {
        xText.setPosition(getWidth() * 5/6 - xText.getWidth() / 2, getHeight() / 3 - xText.getHeight() / 2);
    } else if (pos == 4) {
        xText.setPosition(getWidth() / 6 - xText.getWidth() / 2, getHeight() * 2/3 - xText.getHeight() / 2);
    } else if (pos == 5) {
        xText.setPosition(getWidth() / 2 - xText.getWidth() / 2, getHeight() * 2/3 - xText.getHeight() / 2);
    } else if (pos == 6) {
        xText.setPosition(getWidth() * 5/6 - xText.getWidth() / 2, getHeight() * 2/3 - xText.getHeight() / 2);
    } else if (pos == 7) {
        xText.setPosition(getWidth() / 6 - xText.getWidth() / 2, getHeight() * 1 - xText.getHeight() / 2);
    } else if (pos == 8) {
        xText.setPosition(getWidth() / 2 - xText.getWidth() / 2, getHeight() * 1 - xText.getHeight() / 2);
    } else if (pos == 9) {
        xText.setPosition(getWidth() * 5/6 - xText.getWidth() / 2, getHeight() * 1 - xText.getHeight() / 2);
    }
    add(xText);
};
