const OPERATORS = ["/", "*", "+", "-", "AC", "=", "M"]
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const ANSWER = 0;
var valueArr = [];
const MIN_STACK = 2

function onSubmitClick(event) {
    event.preventDefault();
    // console.log("Hello Mehul");
    // console.log("Value : " + event.target.value)
    // const data = event.target.value;
    // console.log("data " + data);
    // console.log("type : "+ typeof(data))
    // console.log("const type : " + typeof(SUM))
    const data = event.target.value;
    valueArr.push(data);
    console.log(valueArr);
    OPERATORS.forEach((opt) => {
        console.log("OPT is " + opt)
        console.log("Array val :" + valueArr[valueArr.length - 1]);
        if (opt == valueArr[valueArr.length - 1]) {
            console.log("inside loop :" + opt)
            calculateAnswer(opt);
        } else {
            if (valueArr.length == NUMBERS[0])
                displayData(valueArr[0]);
            else {
                var updatedString = valueArr[valueArr.length - 2] + valueArr[valueArr.length - 1];
                valueArr.pop(valueArr.length - 1);
                console.log("Value Poped")
                displayData(valueArr[0]);
            }
        }
    })


    console.log("Array : " + valueArr);
    // if (data === SUM)
    //     additionNumbers(ANSWER, val2);
    // else if (data === MINUS)
    //     subtractNumbers(ANSWER, val2);
    // else if (data === DIVISION)
    //     divideNumbers(ANSWER, val2);
    // else if (data === MULTIPICATION)
    //     mulitiplyNumbers(ANSWER, val2);
    // else
    //     errorFunction();


}


function displayData(total) {
    document.getElementById("txtAnswer").value = total;
}

function calculateAnswer(optType) {
    if (optType == OPERATORS[0])
        divideNumbers(valueArr[valueArr.length - 3], valueArr[valueArr.length - 1]);
    else if (optType == OPERATORS[1])
        mulitiplyNumbers(valueArr[valueArr.length - 3], valueArr[valueArr.length - 1]);
    else if (optType == OPERATORS[2])
        additionNumbers(valueArr[valueArr.length - 3], valueArr[valueArr.length - 1]);
    else if (optType == OPERATORS[3])
        subtractNumbers(valueArr[valueArr.length - 3], valueArr[valueArr.length - 1]);
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