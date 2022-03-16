const OPERATORS = ["/", "*", "+", "-", "=", "AC", "M"]
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var previousTotal = 0;
var valueArr = [];
const MIN_STACK = 2
var displayString = "0"

function onSubmitClick(event) {
    event.preventDefault();

    const data = event.target.value;

    if (data !== OPERATORS[4]) {
        valueArr.push(data) //Push the data to stack until user press =
    }
    else if (data == OPERATORS[4]) {
        startStackSearch(); //once user enter = than function start searching operators and calculate.

    }
    else
        errorFunction(); // If anything went wrong user get error string.

    console.log("Array : " + valueArr);
}

function refreshValueArray() {

}

function startStackSearch() {
    console.log("Temp solution called!!")
    valueArr.forEach((data, i) => {
        if (isOperator(data)) {
            console.log("operated found!!")
            var firstValue = valueArr[i - 1];
            var secondValue = valueArr[i + 1];
            calculateAnswer(data, i);
        }
    });
}

function isOperator(opt) {
    OPERATORS.find(element => {
        return element == opt;
    });
}

function displayData(outputString) {
    // previousTotal = outputString;
    document.getElementById("txtAnswer").value = outputString;
}

function calculateAnswer(optType, index) {
    console.log("Calculated ans called !!");
    if (optType == OPERATORS[0])
        divideNumbers(valueArr[index - 1], valueArr[index + 1]);
    else if (optType == OPERATORS[1])
        mulitiplyNumbers(valueArr[index - 1], valueArr[index + 1]);
    else if (optType == OPERATORS[2])
        additionNumbers(valueArr[index - 1], valueArr[index + 1]);
    else if (optType == OPERATORS[3])
        subtractNumbers(valueArr[index - 1], valueArr[index + 1]);
}

function additionNumbers(val1, val2) {
    console.log("Sum :" + (parseFloat(val1) + parseFloat(val2)));
    var ans = parseFloat(val1) + parseFloat(val2)
    displayData(ans);
}

function subtractNumbers(val1, val2) {
    console.log("Sub :" + (parseFloat(val1) - parseFloat(val2)));
    var ans = parseFloat(val1) - parseFloat(val2)
    displayData(ans);
}

function divideNumbers(val1, val2) {
    console.log("Div :" + (parseFloat(val1) / parseFloat(val2)));
    var ans = parseFloat(val1) / parseFloat(val2)
    displayData(ans);
}

function mulitiplyNumbers(val1, val2) {
    console.log("Multiply  :" + (parseFloat(val1) * parseFloat(val2)));
    var ans = parseFloat(val1) * parseFloat(val2)
    displayData(ans);
}

function errorFunction() {
    console.log("Something wrong!!!")
}