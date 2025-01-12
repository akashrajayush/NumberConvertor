// Initialize empty arrays to store history
let conversionHistory = [];
let calculationHistory = [];

function convertNumber() {
    const number = document.getElementById("number").value;
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);

    if (!number) {
        alert("Please enter a number.");
        return;
    }

    try {
        const result = parseInt(number, fromBase).toString(toBase).toUpperCase();
        document.getElementById("result").textContent = `Converted Number: ${result}`;

        // Add the conversion result to the history
        conversionHistory.push(`${number} (${fromBase}) → ${result} (${toBase})`);
        updateHistory();
    } catch (error) {
        alert("Invalid number or base entered.");
    }
}

function calculate() {
    const num1 = document.getElementById("num1").value;
    const base1 = parseInt(document.getElementById("base1").value);
    const num2 = document.getElementById("num2").value;
    const base2 = parseInt(document.getElementById("base2").value);
    const operation = document.getElementById("operation").value;

    if (!num1 || !num2) {
        alert("Please enter both numbers.");
        return;
    }

    try {
        // Convert inputs to decimal
        const decimalNum1 = parseInt(num1, base1);
        const decimalNum2 = parseInt(num2, base2);

        if (isNaN(decimalNum1) || isNaN(decimalNum2)) {
            alert("Invalid number entered for the given base.");
            return;
        }

        // Perform the selected operation
        let decimalResult;
        switch (operation) {
            case "add":
                decimalResult = decimalNum1 + decimalNum2;
                break;
            case "subtract":
                decimalResult = decimalNum1 - decimalNum2;
                break;
            case "multiply":
                decimalResult = decimalNum1 * decimalNum2;
                break;
            case "divide":
                if (decimalNum2 === 0) {
                    alert("Cannot divide by zero.");
                    return;
                }
                decimalResult = Math.floor(decimalNum1 / decimalNum2); // Integer division
                break;
            default:
                alert("Invalid operation selected.");
                return;
        }

        // Convert the result back to the base of the first number
        const resultInBase1 = decimalResult.toString(base1).toUpperCase();
        document.getElementById("calcResult").textContent = `Result (${base1}-base): ${resultInBase1}`;

        // Add the calculation result to the history
        calculationHistory.push(`${num1} (${base1}) ${operation} ${num2} (${base2}) = ${resultInBase1}`);
        updateHistory();
    } catch (error) {
        alert("An error occurred while calculating. Please check your inputs.");
    }
}

function updateHistory() {
    // Update the history display for both conversion and calculation
    const conversionHistoryList = document.getElementById("conversionHistory");
    const calculationHistoryList = document.getElementById("calculationHistory");

    // Clear previous history
    conversionHistoryList.innerHTML = "";
    calculationHistoryList.innerHTML = "";

    // Append new history item
    conversionHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        conversionHistoryList.appendChild(li);
    });

    calculationHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        calculationHistoryList.appendChild(li);
    });
}

function clearHistory() {
    // Clear both conversion and calculation histories
    conversionHistory = [];
    calculationHistory = [];
    updateHistory();
}
