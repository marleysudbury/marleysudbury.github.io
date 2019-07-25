// Naughts and Crosses
// Inspired by https://www.youtube.com/watch?v=GTWrWM1UsnA
// Still needs a bit of tweaking I think

let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let players = ['X', 'O'];
let currentPlayer;

let goes = 0;

let w;
let h;

function setup() {
    createCanvas(400, 400);
    currentPlayer = random(players);
    w = width / 3;
    h = height / 3;
}

function mouseClicked() {
    if (mouseX < width && mouseY < height) {
        // floor(3*(399/400))
        let i = floor(3*(mouseX/width));
        let j = floor(3*(mouseY/height));
        if (board[j][i] == '') {  
            board[j][i] = currentPlayer;

            // Swap the players
            if (currentPlayer == players[0]) {
                currentPlayer = players[1];
            } else {
                currentPlayer = players[0];
            }
            
            goes++;
        }
    }
}

function check3(a, b, c) {
    return (a == b && b == c && a != '');
}

function checkWinner() {
    let winner = null;

    // Check horizontally
    for (let i = 0; i < 3; i++) {
        if (check3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
            line(0, (i*h)+(h/2), width, (i*h)+(h/2));
        }
    }
    // Check vertically
    for (let i = 0; i < 3; i++) {
        if (check3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
            line((i*w)+(w/2), 0, (i*w)+(w/2), height);
        }
    }
    // Check diagonals
    if (check3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
        line(0, 0, width, height);
    }
    if (check3(board[0][2], board[1][1], board[2][0])) {
        winner = board[0][2];
        line(width, 0, 0, height);
    }

    if (goes >= 9 && winner == null) {
        console.log("Tie");
        winner = -1;
        stroke(255, 0, 0);
        line(width, 0, 0, height);
        line(0, 0, width, height);
    }

    return winner;
}

function draw() {
    background(22);

    stroke(255);
    line(w, 0, w, height);
    line(w*2, 0, w*2, height);
    line(0, h, width, h);
    line(0, h*2, width, h*2);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let spot = board[j][i];
            strokeWeight(4);
            if (spot == players[0]) {
                let xr = w/4;
                line(x-xr, y-xr, x+xr, y+xr);
                line(x+xr, y-xr, x-xr, y+xr);
            } else if (spot == players[1]) {
                noFill()
                ellipse(x, y, w/2)
            }
        }
    }

    let winner = checkWinner();
    if (winner != null) {
        if (winner == -1) {
            console.log("TIE");
        } else {
            /*for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    board[j][i] = winner;
                }
            }*/
            noLoop();
        }
    }
}