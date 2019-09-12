//define columns
const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');
const column4 = document.getElementById('column4');
const column5 = document.getElementById('column5');
const column6 = document.getElementById('column6');
const column7 = document.getElementById('column7');

let playerTurn = 'red'; //or 'black';
let currentColumn = 'column1';

column1.addEventListener('click', function () {
    console.log("column1 clicked");
    clickColumn(column1);
}
)

column2.addEventListener('click', function () {
    console.log("column2 clicked");
    clickColumn(column2);
}
)

column3.addEventListener('click', function () {
    console.log("column3 clicked");
    clickColumn(column3);
}
)

column4.addEventListener('click', function () {
    console.log("column4 clicked");
    clickColumn(column4);
}
)

column5.addEventListener('click', function () {
    console.log("column5 clicked");
    clickColumn(column5);
}
)

column6.addEventListener('click', function () {
    console.log("column6 clicked");
    clickColumn(column6);
}
)

column7.addEventListener('click', function () {
    console.log("column7 clicked");
    clickColumn(column7);
}
)

function clickColumn(column) {
    currentColumn = column;
    console.log("clickColumn running; currentColumn="+currentColumn.id);
    createDisc();
    //do all the turn things
}




//create disc function

function createDisc() {
    console.log("createDisc running");
    let newDisc = document.createElement('div');
    console.log("newDisc ="+newDisc);
    newDisc.className = 'disc';
    currentColumn.appendChild(newDisc);
}