function predictTemperature() {
    var inputTemperature = parseFloat(document.getElementById('temperature').value);
    var predictionElement = document.getElementById('prediction');
    var fahrenheitElement = document.getElementById('fahrenheit');

    if (isNaN(inputTemperature)) {
        predictionElement.textContent = "Please enter a valid temperature!";
        return;
    }

    var fahrenheit = (inputTemperature * 9/5) + 32;

    fahrenheitElement.textContent = fahrenheit.toFixed(2) + " °F";

    // Simple prediction logic (can be replaced with more complex algorithm)
    if (inputTemperature > 25) {
        predictionElement.textContent = "It's likely to be warm.";
    } else if (inputTemperature < 10) {
        predictionElement.textContent = "It's likely to be cold.";
    } else {
        predictionElement.textContent = "The temperature seems moderate.";
    }
}
