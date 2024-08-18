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

// Setting up initial logic and DOM inputs for num1

const display = document.querySelector('.calcDisplay');
display.textContent = '0';
let num1 = '';
let operator = '';
let num2 = '';
let shouldResetDisplay = false;

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

// Captures number clicks in the display
// addGlobalEventListener('click', '.operand', (e) => {
//   if (num1 === '' && operatorButton.dataset.clicked === 'false') {
//     let number = e.target.textContent;
//     num1 += number;
//     calculation += num1;
//     display.textContent = num1;
//     console.log(`Current number: ${num1}`);
//   }
// });

// Step Four:
// Enable All Clear
addGlobalEventListener('click', '.allClear', (e) => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  operator = '';
  shouldResetDisplay = false;
});

// Step Five:
// Set up calculation logic
// A. Need to capture num1 (done)

// B. After num1 has been captured, and once user clicks operator...
//    I. Need to set up operator capture
addGlobalEventListener('click', '.operator', (e) => {
  if (num1 === '') return;
  operator = e.target.textContent;
  shouldResetDisplay = true;
});

// D. After "=" is pressed, the calculation will be called

// Calculation Station
addGlobalEventListener('click', '.return', (e) => {
  let result = parseInt(`${num1}${operator}${num2}`);
  display.textContent = result.toString();
});
//    I. Need to ensure that the strings are parseInt'd and used to math it up
