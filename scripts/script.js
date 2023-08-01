screen = document.querySelector('.screen');
keys = document.querySelectorAll('.keys');
clearKey = document.querySelector('.clear');
operationKey = document.querySelectorAll('.operator');
let currentNum = 0;
let newCycle = 0;
let previousOperation = "";
let previousNumber = 0;

keys.forEach(key => key.addEventListener('click', drawKey));
clearKey.addEventListener('click', clearScreen);
operationKey.forEach(key => key.addEventListener('click', recordOperation));

function drawKey(e) {
    if (newCycle == 1) {
        screen.innerText = "";
        newCycle = 0;
    }
    console.log("PRESSED");
    screen.innerText = screen.innerText + e.target.innerText;
}

function clearScreen (e) {
    screen.innerText = "";
    currentNum = 0;
    previousNumber = 0;
}

function recordOperation (e) {
    console.log(previousOperation);
    operation = e.target.innerText;
    operationNum = +screen.innerText;
    screen.innerText = "";
    switch (operation) {
        case "+":
            if (previousOperation == "=") {
                previousNumber = 0;
            }
            currentNum = previousNumber + +operationNum; 
            screen.innerText = currentNum;
            newCycle = 1; 
            break; 
            
        case "-":
            if (previousOperation == "=" && currentNum != 0) {
                previousNumber = 0;
            } else if (currentNum == 0) {
                currentNum = operationNum;
            } else {
                currentNum -= +operationNum; 
            }
            screen.innerText = currentNum;
            newCycle = 1; 
            break;

        case "*":
            if (previousOperation == "=" && currentNum != 0) {
                previousNumber = 1;
            } else if (currentNum == 0) {
                currentNum = operationNum;
            } else {
                currentNum *= +operationNum;
            }
            screen.innerText = currentNum;
            newCycle = 1; 
            break;

        case "/":
            if (previousOperation == "=" && previousNumber != 0) {
                previousNumber = 1;
            } else if (currentNum == 0) {
                currentNum = operationNum;
            } else {
                currentNum /= +operationNum;
            }
            screen.innerText = currentNum;
            newCycle = 1; 
            break;

        default:
            if (previousOperation == '+') {
                currentNum += operationNum;
            } else if (previousOperation == "-") {
                currentNum -= operationNum;
            } else if (previousOperation == "*") {
                currentNum *= operationNum;
            } else if (previousOperation == "/") {
                currentNum /= operationNum;
            } else {
                currentNum = currentNum;
            }
            screen.innerText = currentNum;
            newCycle = 1;
            break;
    }
    previousOperation = e.target.innerText;
    previousNumber = currentNum;
}
