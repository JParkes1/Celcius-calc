// The Calculator

// Event Listener
document.getElementById('convert-btn').addEventListener('click', calcTotal);

// Event Function
function calcTotal() {
    // Input
    let Fahrenheit = Number(document.getElementById('Temp-F').value)

    // Process
    let Celsius = (Fahrenheit - 32) * 5 / 9

    // Output
    document.getElementById('Output').innerHTML = Math.floor(Celsius);
}