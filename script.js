function convertNumber() {
    const number = document.getElementById("number").value;
    const fromBase = parseInt(document.getElementById("fromBase").value);
    const toBase = parseInt(document.getElementById("toBase").value);
    
    if (!number.trim()) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    try {
        const decimalNumber = parseInt(number, fromBase);
        if (isNaN(decimalNumber)) {
            document.getElementById("result").innerText = "Invalid number for the selected base.";
        } else {
            const convertedNumber = decimalNumber.toString(toBase).toUpperCase();
            document.getElementById("result").innerText = `Result: ${convertedNumber}`;
        }
    } catch (error) {
        document.getElementById("result").innerText = "Conversion error. Please check inputs.";
    }
}
