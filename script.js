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

// Step One:
// Create the core calculator functions

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const percentage = (num1) => num1 / 100;

// Step Two:
// Create global event listener

const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};

// Step Three:
// Setting up initial logic and DOM inputs for num1

const display = document.querySelector('.calcDisplay');
display.textContent = '0';
let num1 = '';

// Captures number clicks in the display
addGlobalEventListener('click', '.operand', (e) => {
  let number = e.target.textContent;
  num1 += number;
  display.textContent = num1;
  console.log(`Current number: ${num1}`);
});

// Step Four:
// Enable All Clear

addGlobalEventListener('click', '.allClear', (e) => {
  display.textContent = '0';
  num1 = '';
});
