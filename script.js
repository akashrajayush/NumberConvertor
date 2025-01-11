function convertNumber() {
    const number = document.getElementById("number").value;
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);

    if (!number) {
        alert("Please enter a number.");
        return;
    }

    const result = parseInt(number, fromBase).toString(toBase).toUpperCase();
    document.getElementById("result").textContent = `Converted Number: ${result}`;
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

    const decimalNum1 = parseInt(num1, base1);
    const decimalNum2 = parseInt(num2, base2);
    let result;

    switch (operation) {
        case "add":
            result = decimalNum1 + decimalNum2;
            break;
        case "subtract":
            result = decimalNum1 - decimalNum2;
            break;
        case "multiply":
            result = decimalNum1 * decimalNum2;
            break;
        case "divide":
            if (decimalNum2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = decimalNum1 / decimalNum2;
            break;
    }

    const resultBase = base1; // Assuming result in the base of Number 1
    document.getElementById("calcResult").textContent = `Result: ${result.toString(resultBase).toUpperCase()}`;
}
