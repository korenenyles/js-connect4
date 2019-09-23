let winCount = 0;
let discIndex = 0;
let columnIndex = 0;


function winColumn() {
    // console.log("Running winColumn");
    columnIndex = currentColumn.index;
    discIndex = 0;
    winCount = 0;
    while (discIndex < 7) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            winAlert();
        }
        discIndex++;
    }
}


function winRow() {
    // console.log("Running winRow");
    columnIndex = 0;
    discIndex = currentColumn.childElementCount - 1;
    winCount = 0;
    while (columnIndex < 7) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            winAlert();
        }
        columnIndex++;
    }
}


function winDiagonalRight() {
    // console.log("Running winDiagonalRight");
    columnIndex = currentColumn.index;
    discIndex = (currentColumn.childElementCount - 1);
    winCount = 0;
    while (columnIndex > 0 && discIndex > 0) {
        columnIndex--;
        discIndex--;
    }
    while (columnIndex >= 0 && discIndex >= 0 && columnIndex < 7 && discIndex < 6) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            winAlert();
        }
        columnIndex++;
        discIndex++;
    }
}


function winDiagonalLeft() {
    // console.log("Running winDiagonalLeft");
    columnIndex = currentColumn.index;
    discIndex = (currentColumn.childElementCount - 1);
    winCount = 0;
    while (columnIndex < 7 && discIndex > 0) {
        columnIndex++;
        discIndex--;
    }
    while (columnIndex >= 0 && discIndex >= 0 && columnIndex < 7 && discIndex < 6) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            winAlert();
        }
        columnIndex--;
        discIndex++;
    }
}


function winTie() {
    // console.log("Running winTie");
    columnIndex = 0;
    winCount = 0;
    while (columnIndex < 7 && winCount != -1) {
        if (gridArray[columnIndex][5] != undefined) {
            winCount++;
        } else { winCount = -1; }
        if (winCount === 7) {
            alert("GAME OVER, MAN! GAME OVER!");
        }
        columnIndex++;
    }
}


function winAlert() {
    if (currentPlayer == 'red'){
        alert("CHOK WINS!");
    } else {
        alert("RANDY WINS!");
    }
    location.reload();
}


function checkForWin() {
    // console.log("Running checkForWin");
    winColumn();
    winRow();
    winDiagonalRight();
    winDiagonalLeft();
    winTie();
}