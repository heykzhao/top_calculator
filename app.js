// Calculator functions
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case add: 
            return add(a, b);
        case subtract:
            return subtract(a, b);
        case multiply:
            return multiply(a, b);
        case divide: 
            if (b === 0) {
                return null
            } else {
                return divide(a, b);
            }
        default:
            return null;
    }
};

// Establish all variables needed
let currentOperator, displayValueString, calculatedNumber; 
let storedNumber, currentNumber = 0;
let displayValueArray = [];
const displayAreaText = document.querySelector('.display-area');
const clearButton = document.querySelector('.clear');
const plusNegativeButton = document.querySelector('.plus-negative');
const percentageButton = document.querySelector('.percentage');
const decimalButton = document.querySelector('.decimal');


const specialButtons = document.querySelectorAll('.special-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.numbers-button');

const topBarDots = document.querySelectorAll('.dots');
const greenDot = document.querySelector('.green-dot');
const yellowDot = document.querySelector('.yellow-dot');
const redDot = document.querySelector('.red-dot');

// Storing display value when number is pressed
operatorButtons.forEach((button => {button.addEventListener('mousedown', operateNumbers);}));
numberButtons.forEach((button => {button.addEventListener('mousedown', addNumber);}));
plusNegativeButton.addEventListener('mousedown',plusNegativive)
percentageButton.addEventListener('mousedown',percentagize)

if (storedNumber !== 0 && currentNumber !== 0) {
    clearButton.innerText = 'CE';
    clearButton.addEventListener('mousedown', clearEntry);
} else {
    clearButton.addEventListener('mousedown', allClear);
}

function operateNumbers(e) {
    let operatorPressed = e.target.classList;
    if (operatorPressed.contains('add') == true) {
        currentOperator = add;
        storedNumber = currentNumber;
        displayAreaText.innerText = storedNumber.toString();
        displayValueArray = [];
    } else if (operatorPressed.contains('minus') == true) {
        currentOperator = subtract;
        storedNumber = currentNumber;
        displayAreaText.innerText = storedNumber.toString();
        displayValueArray = [];
    } else if (operatorPressed.contains('multiply') == true) {
        currentOperator = multiply;
        storedNumber = currentNumber;
        displayAreaText.innerText = storedNumber.toString();
        displayValueArray = [];
    } else if (operatorPressed.contains('divide') == true) {
        currentOperator = divide;
        storedNumber = currentNumber;
        displayAreaText.innerText = storedNumber.toString();
        displayValueArray = [];
    } else if (operatorPressed.contains('equals') == true) {
        storedNumber = operate(currentOperator, storedNumber, currentNumber);
        currentNumber = storedNumber;
        displayAreaText.innerText = storedNumber.toString();
        displayValueArray = [];
    }
};
function addNumber(e) {
    let numberPressed = e.target.innerText;
    console.log(e);
    if ((currentNumber == undefined || currentNumber == 0) && numberPressed == '0' && displayValueArray.includes('.') == false) {
        return;
    } else if (displayValueArray.includes('.') == true && numberPressed == '.') {
        return;
    } else {
        displayValueArray.push(numberPressed);
        displayValueString = displayValueArray.join('');
        currentNumber = Number(displayValueArray.join(''));
    };

    if (displayValueArray[0] == '.') {
        displayAreaText.innerText = '0' + displayValueString;
    } else {
        displayAreaText.innerText = displayValueString;
    }
};
function plusNegativive(e) {
    if (currentNumber == 0 || currentNumber == undefined) {
        return
    } else {
        currentNumber = currentNumber * -1;
        displayValueArray = currentNumber.toString().split('');
        displayValueString = displayValueArray.join('');
        displayAreaText.innerText = displayValueString;
    }
};
function percentagize(e) {
    if (currentNumber == 0 || currentNumber == undefined) {
        return
    } else {
        currentNumber = currentNumber / 100;
        storedNumber = currentNumber;
            displayValueArray = storedNumber.toString().split('');
            displayValueString = displayValueArray.join('');
            if (displayValueArray[0] == '.') {
                displayAreaText.innerText = '0' + displayValueString;
            } else {
                displayAreaText.innerText = displayValueString;
            }
    }
};
function allClear(e) {
    currentNumber = undefined;
    storedNumber = undefined;
    displayValueArray = [];
    displayAreaText.innerText = 0;
};
function clearEntry(e) {
    currentNumber = undefined;
    displayValueArray = [];
    displayAreaText.innerText = 0;
};


// Changing opacity on button click
specialButtons.forEach((button => {
    button.addEventListener('mousedown', specialButtonPressed);
    button.addEventListener('mouseup', specialButtonOriginal);
}));
operatorButtons.forEach((button => {
    button.addEventListener('mousedown', operatorButtonPressed);
    button.addEventListener('mouseup', operatorButtonOriginal);
}));
numberButtons.forEach((button => {
    button.addEventListener('mousedown', numberButtonPressed);
    button.addEventListener('mouseup', numberButtonOriginal);
}));

function specialButtonPressed(e) {
    e.target.style.backgroundColor = '#5A5A5B';
};
function specialButtonOriginal(e) {
    e.target.style.backgroundColor = '#39393C';
};
function operatorButtonPressed(e) {
    e.target.style.backgroundColor = '#C0812E';
};
function operatorButtonOriginal(e) {
    e.target.style.backgroundColor = '#F2A33C';
};
function numberButtonPressed(e) {
    e.target.style.backgroundColor = '#9D9D9D';
};
function numberButtonOriginal(e) {
    e.target.style.backgroundColor = '#5A5A5B';
};

// Hover effect over colored dots
topBarDots.forEach((dot => {
    dot.addEventListener('mouseover', e => {
        greenDot.innerText = '+';
        yellowDot.innerText = '−';
        redDot.innerText = '×';
    })
    dot.addEventListener('mouseout', e => {
        greenDot.innerText = '';
        yellowDot.innerText = '';
        redDot.innerText = '';
    });
}))

// Adding keyboard shortcuts
function keyboardShortcut(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  }

