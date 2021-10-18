// Calculator functions
function add(a, b) {
    return total = a + b;
};
function subtract(a, b) {
    return total = a - b;
};
function multiply(a, b) {
    return total = a * b;
};
function divide(a, b) {
    return total = a / b;
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

// Storing display value when number is pressed
let displayValue;
const displayAreaText = document.querySelector('.display-area');
displayAreaText.innerText = 'test';

// Hover effect over colored dots
const topBarDots = document.querySelectorAll('.dots');
const greenDot = document.querySelector('.green-dot');
const yellowDot = document.querySelector('.yellow-dot');
const redDot = document.querySelector('.red-dot');
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

// Changing opacity on button click
const specialButtons = document.querySelectorAll('.special-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.numbers-button');

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
