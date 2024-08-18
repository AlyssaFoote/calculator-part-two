// Build a calculator//

/* 
Functionality:

1. Add
2. Subtract
3. Multiply
4. Divide
5. Percentage (Divide by 100)
6. A clear button
7. A delete button so you can move back in space
8. Will accept pushing the buttons or pressing numbers in keyboard

Appearance: 

1. Grid structure for the buttons
2. Match the style that was made in Figma

*/

// Setting up initial logic and DOM inputs

const display = document.querySelector('.calcDisplay');
display.textContent = '0';
let num1 = '';
let operator = '';
let num2 = '';
let shouldResetDisplay = false;

// Global event listener function

const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};

// Core calculator functions

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const percentage = (num1) => num1 / 100;

// Capture number clicks

addGlobalEventListener('click', '.operand', (e) => {
  const number = e.target.textContent;

  if (shouldResetDisplay) {
    display.textContent = '';
    shouldResetDisplay = false;
  }

  if (operator === '') {
    num1 += number;
    display.textContent = num1;
  } else {
    num2 += number;
    display.textContent = num2;
  }
});

// Enable All Clear

addGlobalEventListener('click', '.allClear', (e) => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  operator = '';
  shouldResetDisplay = false;
});

// Operator Capture

addGlobalEventListener('click', '.operator', (e) => {
  if (num1 === '') return;
  operator = e.target.textContent;
  shouldResetDisplay = true;
});

// Percentage Capture

addGlobalEventListener('click', '.percentage', (e) => {
  if (num1 === '') return;
  console.log('percentage');
  num1 /= 100;
  display.textContent = num1;
});

// Calculation Station
addGlobalEventListener('click', '.return', (e) => {
  if (num1 === '' || num2 === '' || operator === '') return;
  let result;
  switch (operator) {
    case '+':
      result = add(parseFloat(num1), parseFloat(num2));
      break;
    case '-':
      result = subtract(parseFloat(num1), parseFloat(num2));
      break;
    case 'X':
      result = multiply(parseFloat(num1), parseFloat(num2));
      break;
    case '/':
      result = divide(parseFloat(num1), parseFloat(num2));
      break;
    default:
      result = 'Error';
  }
  display.textContent = result.toFixed(2).toString();

  num1 = result.toString();
  num2 = '';
  operator = '';
  shouldResetDisplay = true;
});
