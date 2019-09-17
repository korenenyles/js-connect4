let winCount = 0;
let discIndex = 0;
let columnIndex = 0;


function winColumn() {
    // console.log("Running winColumn");
    columnIndex = currentColumn.index;
    discIndex = 0;
    while (discIndex < 7) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            alert(currentPlayer + " player wins!")
        }
        discIndex++;
    }
}


function winRow() {
    // console.log("Running winRow");
    columnIndex = 0;
    discIndex = currentColumn.childElementCount - 1;
    while (columnIndex < 7) {
        if (gridArray[columnIndex][discIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            alert(currentPlayer + " player wins!")
        }
        columnIndex++;
    }
}


function winDiagonal() {
    // console.log("Running winDiagonal");
}


function winTie() {
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


function checkForWin() {
    // console.log("Running checkForWin");
    winColumn();
    winRow();
    winDiagonal();
    winTie();
}