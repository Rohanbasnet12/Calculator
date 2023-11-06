// Creating variables to store concatenated buttons on the display and the result
var renderButton = '';
var currentResult = '';

// Function to update the display
function updateDisplay() {
    $('#result p').text(renderButton);
}

// Function to handle digit input
function handleDigitInput(buttonClicked) {
    renderButton += buttonClicked;
    updateDisplay();
}

// Function to handle operator input
function handleOperatorInput(buttonClicked) {
    renderButton += buttonClicked;
    updateDisplay();
}

// Function to handle equals button
function handleEqualsButton() {
    try {
        currentResult = evaluateExpression();
        $('#result p').text(currentResult);
    } catch (error) {
        $('#result p').text('Error');
    }
}

// Function to evaluate the expression using a safer method than eval()
function evaluateExpression() {
    // Implement your own expression evaluation logic or use a library
    // For simplicity, using eval() here, but it's not recommended in a production setting.
    return eval(renderButton);
}

// Event handler for button clicks
$("#buttons button").on('click', (e) => {
    let buttonClicked = $(e.target).text();

    if (buttonClicked === 'C') {
        renderButton = '';
        $('#result p').text('');
    } else if (buttonClicked === 'Del') {
        renderButton -= renderButton;
    } else if (buttonClicked === '=') {
        handleEqualsButton();
    } else {
        handleDigitInput(buttonClicked);
    }
});

