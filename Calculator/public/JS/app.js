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

function evaluateExpression() {
    return eval(renderButton);
}

// Event handler for button clicks
$("#buttons button").on('click', (e) => {
    let buttonClicked = $(e.target).text();

    if (buttonClicked === 'C') {
        renderButton = '';
        $('#result p').text('');
    } else if (buttonClicked === 'Del') {
        renderButton = renderButton.slice(0, -1);
        $('#result p').text(renderButton)
    } else if (buttonClicked === '=') {
        handleEqualsButton();
    } else {
        handleDigitInput(buttonClicked);
    }
});

