

// function winTest() {
//     // console.log("Running winTest");
//     if (gridArray[currentColumn.index].length === 6){
//         alert("GAME OVER");
//     }
// }

function winTest() {
    // console.log("Running winTest");
    if (gridArray[2][3] == 'black'){
        alert("GAME OVER");
    }
}

function winColumn() {
    // console.log("Running winColumn");
}

function winRow() {
    // console.log("Running winRow");
}

function winDiagonal() {
    // console.log("Running winDiagonal");
}

function winTie() {
    // console.log("Running winTie");
}

function checkForWin() {
    console.log("Running checkForWin");
    winTest();
    winColumn();
    winRow();
    winDiagonal();
    winTie();
}