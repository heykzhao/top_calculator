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