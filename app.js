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
const displayAreaText = document.querySelector('#wrap');
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
operatorButtons.forEach((button => {button.addEventListener('click', operateNumbers);}));
numberButtons.forEach((button => {button.addEventListener('click', addNumber);}));
plusNegativeButton.addEventListener('click',plusNegativive)
percentageButton.addEventListener('click',percentagize)
clearButton.addEventListener('click', clearEntry);

operatorButtons.forEach((button => {button.addEventListener('click', fontSizeAdjust);}));
numberButtons.forEach((button => {button.addEventListener('click', fontSizeAdjust);}));
plusNegativeButton.addEventListener('click',fontSizeAdjust)
percentageButton.addEventListener('click',fontSizeAdjust)
clearButton.addEventListener('click', fontSizeAdjust);

clearButton.innerText = 'AC';

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
    clearButton.innerText = 'CE';
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
function clearEntry(e) {
    if (currentNumber !== 0) {
        storedNumber = 0;
        displayValueArray = [];
        displayAreaText.innerText = 0;
        clearButton.innerText = 'AC';
    } else {
        currentNumber = 0;
        storedNumber = 0;
        displayValueArray = [];
        displayAreaText.innerText = 0;
    }
};


// Changing opacity on button click
specialButtons.forEach((button => {
    button.addEventListener('click', specialButtonPressed);
}));
operatorButtons.forEach((button => {
    button.addEventListener('click', operatorButtonPressed);
}));
numberButtons.forEach((button => {
    button.addEventListener('click', numberButtonPressed);
}));

function specialButtonPressed(e) {
    e.target.style.backgroundColor = '#5A5A5B';
    setTimeout(function() {
        e.target.style.backgroundColor = '#39393C';
    }, 50)
};
function operatorButtonPressed(e) {
    e.target.style.backgroundColor = '#C0812E';
    setTimeout(function() {
        e.target.style.backgroundColor = '#F2A33C';
    }, 50)
};
function numberButtonPressed(e) {
    e.target.style.backgroundColor = '#9D9D9D';
    setTimeout(function() {
        e.target.style.backgroundColor = '#5A5A5B';
    }, 50)
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
document.addEventListener('keydown', function(e) {
	let key = e.key
	switch (key) {
		case '1':
            document.querySelector('.number-1').click();
			break;
		case '2':
            document.querySelector('.number-2').click();
			break;
		case '3':
            document.querySelector('.number-3').click();
			break;
		case '4':
            document.querySelector('.number-4').click();
			break;
		case '5':
            document.querySelector('.number-5').click();
			break;
		case '6':
            document.querySelector('.number-6').click();
			break;
		case '7':
            document.querySelector('.number-7').click();
			break;
		case '8':
            document.querySelector('.number-8').click();
			break;
		case '9':
            document.querySelector('.number-9').click();
			break;
		case '0':
            document.querySelector('.number-0').click();
			break;
		case '.':
            document.querySelector('.decimal').click();
            break;
		case 'c':
            document.querySelector('.clear').click();
            break;
		case 'Escape':
            document.querySelector('.clear').click();
            break;
		case '%':
            document.querySelector('.percentage').click();
            break;
		case '/':
            document.querySelector('.divide').click();
            break;
		case '*':
            document.querySelector('.multiply').click();
            break;
		case '-':
            document.querySelector('.minus').click();
            break;
		case '+':
            document.querySelector('.add').click();
            break;
		case '=':
            document.querySelector('.equals').click();
            break;
		case 'Enter':
            document.querySelector('.equals').click();
            break;
	}
});

// Adjust font size of display area based on string length
let fit = document.getElementById("fit"),
    wrap = document.getElementById("wrap"),
    step = 0.5,
    currentSize;

function fontSizeAdjust(e) {
    wrap.style.fontSize = '80px';
    while (fit.offsetWidth < wrap.offsetWidth+50) {
        currentSize = parseFloat(window.getComputedStyle(wrap, null).getPropertyValue('font-size'));
        wrap.style.fontSize = (currentSize - step) + 'px';
    }
};