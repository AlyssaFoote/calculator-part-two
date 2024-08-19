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

addGlobalEventListener('click', '.allClear', () => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  operator = '';
  shouldResetDisplay = false;
});

// Percentage Capture

addGlobalEventListener('click', '.percentage', (e) => {
  if (operator === '' || shouldResetDisplay) {
    if (num1 === '') return; //
    num1 = (parseFloat(num1) / 100).toString(); // Convert to a percentage
    display.textContent = num1;
  } else {
    if (num2 === '') return; //
    num2 = (parseFloat(num2) / 100).toString(); // Convert to a percentage
    display.textContent = num2;
  }
  shouldResetDisplay = false; // Reset display only when the next number is entered
});

// Operator Capture

addGlobalEventListener('click', '.operator', (e) => {
  if (num1 === '') return; // Ignore if no number has been entered yet

  if (num2 !== '') {
    performCalculation(); // Directly call the performCalculation function
  }

  operator = e.target.textContent;
  shouldResetDisplay = true;
});

// Calculation Station
addGlobalEventListener('click', '.return', () => {
  if (num1 === '' || num2 === '' || operator === '') return;

  // Parse num1 and num2 to ensure they are numbers
  let number1 = parseFloat(num1);
  let number2 = parseFloat(num2);

  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
        display.textContent = 'LOL'; // Handle division by zero
        return;
      } else {
        result = number1 / number2;
      }
      break;
    default:
      display.textContent = 'Error'; // Handle unexpected operator
      return;
  }

  if (isNaN(result) || !isFinite(result)) {
    display.textContent = 'Error'; // Handle invalid results
  } else {
    result = Math.round(result * 100) / 100;
    display.textContent = result.toString(); // Display the result without rounding errors
  }

  // Ensure the result is stored correctly for further operations
  num1 = result.toString();
  num2 = '';
  operator = '';
  shouldResetDisplay = true;
});
