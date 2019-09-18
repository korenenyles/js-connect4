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
            alert(currentPlayer+" player wins!")
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
            alert(currentPlayer+" player wins!")
        }
        columnIndex++;
    }
}


function winDiagonal() {
    // console.log("Running winDiagonal");
}


function winTie() {
    // console.log("Running winTie");
}


function checkForWin() {
    // console.log("Running checkForWin");
    winColumn();
    winRow();
    winDiagonal();
    winTie();
}

function myButton(){
	location.reload();}
    
    
