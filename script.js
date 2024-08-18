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
let operator = '';
let num2 = '';
let shouldResetDisplay = false;

// Captures number clicks in the display
addGlobalEventListener('click', '.operand', (e) => {
  if (num1 === '' && operatorButton.dataset.clicked === 'false') {
    let number = e.target.textContent;
    num1 += number;
    calculation += num1;
    display.textContent = num1;
    console.log(`Current number: ${num1}`);
  }
});

// Step Four:
// Enable All Clear
addGlobalEventListener('click', '.allClear', (e) => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  operator = '';
});

// Step Five:
// Set up calculation logic
// A. Need to capture num1 (done)

// B. After num1 has been captured, and once user clicks operator...
//    I. Need to set up operator capture
addGlobalEventListener('click', '.operator', (e) => {
  operatorButton.dataset.clicked = 'true';
  operator = e.target.textContent;
  console.log(operator);
});

// C. Then num2 can be captured (dependant on operator being clicked)
//    I. Need to set up num2 capture
addGlobalEventListener('click', '.number', (e) => {});
if (operator !== '' && operator !== null && operator !== undefined) {
  display.textContent = '';
  num2 = e.target.textContent;
  display.textContent = num2;
}

// D. After "=" is pressed, the calculation will be called

// Calculation Station
addGlobalEventListener('click', '.return', (e) => {
  let result = parseInt(`${num1}${operator}${num2}`);
  display.textContent = result.toString();
});
//    I. Need to ensure that the strings are parseInt'd and used to math it up
