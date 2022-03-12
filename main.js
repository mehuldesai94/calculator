const sum = "+";
const minus = "-";
const div = "/";
const multiply = "*"

function onSubmitClick(event) {
    event.preventDefault();
    console.log("Hello Mehul");

    var val1 = document.getElementById("value1").value;
    var val2 = document.getElementById("value2").value;
    var op = document.getElementById("value3").value;

    if (op === sum)
        additionNumbers(val1, val2);
    else if (op === minus)
        subtractNumbers(val1, val2);
    else if (op === div)
        divideNumbers(val1, val2);
    else if (op === multiply)
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