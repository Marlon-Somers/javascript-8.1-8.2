
function GetValue() {
    value1 = parseInt(document.getElementById("value1").value);
    value2 = parseInt(document.getElementById("value2").value);
}

function Sum() {
    GetValue();
    result = value1 + value2;
    SetResult(result);
}

function Multiply() {
    GetValue();
    result = value1 * value2;
    SetResult(result);
}

function Divide() {
    GetValue();
    result = value1 / value2;
    SetResult(result);
}

function Subtract() {
    GetValue();
    result = value1 - value2;
    SetResult(result);
}

function SetResult(result) {
    document.getElementById("Result").textContent = "Result: " + result;
}