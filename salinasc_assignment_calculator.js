// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

for(let i = 0; i < numberButtons.length; i++) {
  	numberButtons[i].addEventListener('click', clickNumber);
}

for(let i = 0; i < operatorButtons.length; i++) {
  	operatorButtons[i].addEventListener('click', clickOperator);
}

equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
  	console.log(event.target.value);
	const button-1 = document.getElementById("button-1");
	const button-2 = document.getElementById("button-2");
	const button-3 = document.getElementById("button-3");
	const button-4 = document.getElementById("button-4");
const button-5 = document.getElementById("button-5");
const button-6 = document.getElementById("button-6");
const button-7 = document.getElementById("button-7");
const button-8 = document.getElementById("button-8");
const button-9 = document.getElementById("button-9");
const button-0 = document.getElementById("button-0");
}

function clickOperator(event) {
	console.log(event.target.value);
	const button-multiply = document.getElementById("button-multiply");
	const button-divide = document.getElementById("button-divide");
	const button-power = document.getElementById("button-power");
	const button-plus = document.getElementById("button-plus");
	const button-minus = document.getElementById("button-minus");
}

function clickEqualButton(equalButton) {
	const button-equal = document.getElementById("button-equal");
}

function clickClearButton(clearButton) {
	const button-clear = document.getElementById("button-clear");
}

