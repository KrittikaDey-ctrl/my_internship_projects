function display(value) {
    document.getElementById("result").value += value;
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function solve() {
    let x = document.getElementById("result").value;
    try {
        let y = eval(x);
        document.getElementById("result").value = y;
    } catch {
        document.getElementById("result").value = "Error";
    }
}