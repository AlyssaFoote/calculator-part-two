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
