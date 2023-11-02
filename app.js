function GetValue() {
    value1 = parseInt(document.getElementById("value1").value);
    value2 = parseInt(document.getElementById("value2").value);

    if (value1 <= 0 || value2 <= 0) {
        SetResult("Het ingevoerde getal is te laag!");
        return false;
    } else {
        return true;
    }
}

function Sum() {
    if (GetValue()) {
        result = value1 + value2;
        SetResult(result);
    }
}

function Multiply() {
    if (GetValue()) {
        result = value1 * value2;
        SetResult(result);
    }
}

function Divide() {
    if (GetValue()) {
        result = value1 / value2;
        let rounded = result.toFixed(1);
        SetResult(rounded);
    }
}

function Subtract() {
    if (GetValue()) {
        result = value1 - value2;
        SetResult(result);
    }
}

function SetResult(result) {
    document.getElementById("Result").textContent = "Result: " + result;
}
