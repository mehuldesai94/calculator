const SUM = "+";
const MINUS = "-";
const DIVISION = "/";
const MULTIPICATION = "*";
const ONE = "1";
const TWO = "2";
const THREE = "3";
const FOUR = "4";
const FIVE = "5";
const SIX = "6";
const SEVEN = "7";
const EIGHT = "8";
const NINE = "9";


function onSubmitClick(event) {
    event.preventDefault();
    console.log("Hello Mehul");

    var val1 = document.getElementById("value1").value;
    var val2 = document.getElementById("value2").value;
    var op = document.getElementById("value3").value;

    if (op === SUM)
        additionNumbers(val1, val2);
    else if (op === MINUS)
        subtractNumbers(val1, val2);
    else if (op === DIVISION)
        divideNumbers(val1, val2);
    else if (op === MULTIPICATION)
        mulitiplyNumbers(val1, val2);
    else
        errorFunction();
}

function additionNumbers(val1, val2) {
    console.log("Sum :" + (parseFloat(val1) + parseFloat(val2)));
    var ans = parseFloat(val1) + parseFloat(val2)
    document.getElementById("answer").value = ans;
}

function subtractNumbers(val1, val2) {
    console.log("Sub :" + (parseFloat(val1) - parseFloat(val2)));
    var ans = parseFloat(val1) - parseFloat(val2)
    document.getElementById("answer").value = ans;
}

function divideNumbers(val1, val2) {
    console.log("Div :" + (parseFloat(val1) / parseFloat(val2)));
    var ans = parseFloat(val1) / parseFloat(val2)
    document.getElementById("answer").value = ans;
}

function mulitiplyNumbers(val1, val2) {
    console.log("Multiply  :" + (parseFloat(val1) * parseFloat(val2)));
    var ans = parseFloat(val1) * parseFloat(val2)
    document.getElementById("answer").value = ans;
}

function errorFunction() {
    console.log("Something wrong!!!")
}