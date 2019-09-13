//define columns
const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');
const column4 = document.getElementById('column4');
const column5 = document.getElementById('column5');
const column6 = document.getElementById('column6');
const column7 = document.getElementById('column7');


//initialize other variables
let playerTurn = 'red'; //or 'black';
let currentColumn = 'column1';


//column click event listeners
column1.addEventListener('click', function () {
    clickColumn(column1);
})

column2.addEventListener('click', function () {
    clickColumn(column2);
})

column3.addEventListener('click', function () {
    clickColumn(column3);
})

column4.addEventListener('click', function () {
    clickColumn(column4);
})

column5.addEventListener('click', function () {
    clickColumn(column5);
})

column6.addEventListener('click', function () {
    clickColumn(column6);
})

column7.addEventListener('click', function () {
    clickColumn(column7);
})


//main function to run when a column is clicked
function clickColumn(column) {
    currentColumn = column;
    if (currentColumn.childElementCount <= 5) {
        console.log("clickColumn running; currentColumn=" + currentColumn.id);
        createDisc();
        console.log("type =" +currentColumn.childElementCount);
        // console.log("whatDisk ="+whatDisc());
        whatDisc();
        //do all the turn things
        //test for column win
        //test for row win
        //test for diagonal win
        if (playerTurn === 'red') {
            playerTurn = 'black';
        } else { playerTurn = 'red' }
        console.log("player turn set to " + playerTurn);
    } else {
        alert("Illegal Move!");
    }
}


//create disc function
function createDisc() {
    console.log("createDisc running");
    let newDisc = document.createElement('div');
    // newDisc.className = 'disc';
    if (playerTurn === 'red') {
        newDisc.className = 'discRed';;
    } else { newDisc.className = 'discBlack'; }
    currentColumn.appendChild(newDisc);
}

function whatDisc(){
    let columnArray = currentColumn.childNodes;
    console.log("columnArray ="+columnArray);
    console.log("columnArray[0] ="+columnArray[length-1].className);
    // return(currentColumn.childElement[1].className);

    // if (){
    //     return 'red';
    // } else {return 'black'}
}