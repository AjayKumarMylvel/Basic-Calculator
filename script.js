let disp = document.getElementById("dis")
function evaluateExpression() {
    try {
        disp.value = eval(disp.value);
    } catch {
        disp.value = "Error";
        setTimeout(() => (disp.value = ""), 2000);
    }
}
function appendValue(value) {
    // Prevent appending 0 or 00 when the display is empty or already has 0
    if ((value === '0' || value === '00') && (disp.value === '' || disp.value === '0')) {
        return;
    }

    // Prevent adding multiple decimal points within the same number
    if (value === '.') {
        // Check if the last entered number (after the last operator) already contains a decimal point
        const lastNumber = disp.value.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            return;
        }
    }

    // Append the value to the display
    disp.value += value;
}

function clearDisplay() {
    disp.value = '';
}
function deleteLast() {
    disp.value = disp.value.toString().slice(0, -1);
}
