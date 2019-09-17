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

//its hard to refractor any of this considering we dont have a specific row-so im trying to figure out how we can use the array we set up and input the specific places within that array

//function winDiagonal() {
    // console.log("Running winDiagonal");
 //Connect Four•Check for win (diagonally - first direction):// Check for win diagonally, from top left
// for(int row =0; row < board.length-3; row++){
// for(int col =0; col < board[row].length-3; col++){
     // if(board[row][col]!='□'&& board[row][col]== board[row+1][col+1]&& board[row][col]== board[row+2][col+2]&& board[row][col]==board[row+3][col+3]){

    // return true;
        //}
    // }

//}



//second check direction
// Check for win diagonally, from top right
//for(int row =0; row < board.length-3; row++){
    //for(int col =3; col < board[row].length; col++){
        //if(board[row][col]!='□'&& board[row][col]== board[row+1][col-1]&& board[row][col]== board[row+2][col-2]&& board[row][col]== board[row+3][col-3]){
            //return true;
              //  }
           //  }
        // }
          //  return 

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