	
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = calculate(num1, num2);

                // Display the result
                displayResult(result);
            } else {
                displayResult('Please enter valid numbers');
            }
        }

function calculate(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // calculate the numbers
    return {
        addition: a + b,
        substraction: a - b,
        multiplication: a * b,
        division: b !== 0 ? a / b : 'Error: Cannot divide by zero'
    };
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');

    if (typeof result === 'string'){
        resultElement.textContent = result;
        return;
    }

    resultElement.innerHTML = `
    Addition: ${result.addition}<br>
    Substraction: ${result.substraction}<br>
    Multiplication: ${result.multiplication}<br>
    Division: ${result.division}`;
}
		
