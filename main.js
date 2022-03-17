const OPERATORS = ["/", "*", "+", "-", "=", "AC", "M"]
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var previousTotal = 0;
var valueArr = [];
const MIN_STACK = 2;
var isUpdateStack = false;

function onSubmitClick(event) {
    event.preventDefault();

    const data = event.target.value;

    if (data !== OPERATORS[4]) {
        valueArr.push(data) //Push the data to stack until user press =
        var displayString = document.getElementById("txtAnswer").value;
        displayString += " " + data;
        displayData(displayString);
    }
    else if (isOperator(data)) {
        isUpdateStack = true;
        startStackSearch(); //once user enter = than function start searching operators and calculate.
    }
    else
        errorFunction(); // If anything went wrong user get error string.

    console.log("Array : " + valueArr);
    isUpdateStack = false;
}

function refreshValueArray() {

}

function startStackSearch() {

    for(var i = 0; i < valueArr.length; i++){
        var data = valueArr[i];
        if (isOperator(data)) {
            var firstValue = valueArr[i - 1];
            var secondValue = valueArr[i + 1];
            calculateAnswer(data, i);
            i-=2;
        }
    }

    // valueArr.forEach((data, i) => {
    //     if (isOperator(data)) {
    //         var firstValue = valueArr[i - 1];
    //         var secondValue = valueArr[i + 1];
    //         calculateAnswer(data, i);
    //     }
    // });
}

function isOperator(opt) {
    var isOpt = false;
    OPERATORS.forEach(element => {
        if (element == opt)
            isOpt = true;
    });
    return isOpt;
}

function displayData(outputString) {
    // previousTotal = outputString;
    document.getElementById("txtAnswer").value = outputString;
    updateValueArray();
}

function updateValueArray() {
    if (isUpdateStack) {
        valueArr.splice(0, 2);
        console.log("Sliced Array : " + valueArr);
        valueArr[0] = (document.getElementById("txtAnswer").value);
        console.log("Updated Array : " + valueArr);
    }

}

function calculateAnswer(optType, index) {
    // console.log("Calculated ans called !!");
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