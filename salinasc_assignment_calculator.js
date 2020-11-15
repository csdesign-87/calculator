// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
var variable1;
var variable2;
var operator = "none";
var result1;

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

	if (operator === "none")
        {
		variable1 = parseInt(event.target.value);
		const firstNumber = document.getElementById("first-number");
		firstNumber.innerHTML = variable1;
	}
	else
	{
		variable2 = parseInt(event.target.value);
		const secondNumber = document.getElementById("second-number");
		secondNumber.innerHTML = variable2;
	}
}

function clickOperator(event) {
	console.log(event.target.value);
	operator = event.target.value;
	const operation = document.getElementById("operator");
	operation.innerHTML = operator;
}

function clickEqualButton(equalButton) {
	if (operator === "plus")
	{
		result1 = variable1 + variable2;
		//operator = "+";
	}
	else 
if (operator === "minus")
	{
		result1 = variable1 - variable2;
	}
	else
if (operator === "divide")
	{
		result1 = variable1 / variable2;
	}
	else
if (operator === "times")
	{
		result1 = variable1 * variable2;
	}
	else
if (operator === "power")
	{
		result1 = variable1 ^ variable2;
	}

	const result = document.getElementById("result");
	result.innerHTML = result1;
}

function clickClearButton(clearButton) {
	operator = "none";
	variable1 = 0;
	variable2 = 0;
	const firstNumber = document.getElementById("first-number");
	firstNumber.innerHTML = ""
	const operation = document.getElementById("operator");
	operation.innerHTML = "";
	const secondNumber = document.getElementById("second-number");
	secondNumber.innerHTML = "";
	const result = document.getElementById("result");
	result.innerHTML = "";
}

