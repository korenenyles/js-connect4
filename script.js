//define gameTable
const gameTable = document.getElementById('gameTable');

//define turn indicator
const turnBox = document.getElementById('turnBox');

//define columns
const column0 = document.getElementById('column0');
column0.index = 0;
const column1 = document.getElementById('column1');
column1.index = 1;
const column2 = document.getElementById('column2');
column2.index = 2;
const column3 = document.getElementById('column3');
column3.index = 3;
const column4 = document.getElementById('column4');
column4.index = 4;
const column5 = document.getElementById('column5');
column5.index = 5;
const column6 = document.getElementById('column6');
column6.index = 6;


//initialize other variables
let currentPlayer = 'red'; //or 'black';
let currentColumn = 'column1';
let gridArray = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];


//click event listener
gameTable.addEventListener('click', function (evt) {
    //when a disc is clicked, run clickColumn with its parent column:
    if (evt.target.className.indexOf('disc') > -1) {
        clickColumn(evt.target.parentNode);
    } 
    //when anywhere else in a column is clicked, run clickColumn with that column:
    else clickColumn(evt.target);

})

//main function to run when a column is clicked
function clickColumn(column) {
    currentColumn = column;
    // console.log("Runing clickColumn; currentColumn = " + currentColumn.id);
    if (currentColumn.childElementCount <= 5) {
        createDisc();
        checkForWin();
        swapPlayer();
    } else {
        alert("Illegal Move!");
    }
}


//create disc function
function createDisc() {
    // console.log("Running createDisc");
    let newDisc = document.createElement('div');
    if (currentPlayer === 'red') {
        newDisc.className = 'discRed';
        gridArray[currentColumn.index].push(['red']);
    } else {
        newDisc.className = 'discBlack';
        gridArray[currentColumn.index].push(['black']);
    }
    currentColumn.appendChild(newDisc);
}

function swapPlayer(){
    if (currentPlayer === 'red') {
        currentPlayer = 'black';
        turnBox.innerHTML = 'RANDY'
    } else {
        currentPlayer = 'red';
        turnBox.innerHTML = 'CHOK'
    }
    console.log("Player turn set to " + currentPlayer);
}
