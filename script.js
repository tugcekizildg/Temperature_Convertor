document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    const convertButton = document.querySelector("button");

    function roundNumber(num) {
        return Math.round(num * 100) / 100;
    }

    function convertTemperature() {
        if (celsiusInput.value !== "") {
            let celsius = parseFloat(celsiusInput.value);
            fahrenheitInput.value = roundNumber((celsius * 9/5) + 32);
            kelvinInput.value = roundNumber(celsius + 273.15);
        } else if (fahrenheitInput.value !== "") {
            let fahrenheit = parseFloat(fahrenheitInput.value);
            celsiusInput.value = roundNumber((fahrenheit - 32) * 5/9);
            kelvinInput.value = roundNumber((fahrenheit - 32) * 5/9 + 273.15);
        } else if (kelvinInput.value !== "") {
            let kelvin = parseFloat(kelvinInput.value);
            celsiusInput.value = roundNumber(kelvin - 273.15);
            fahrenheitInput.value = roundNumber((kelvin - 273.15) * 9/5 + 32);
        }
    }

    convertButton.addEventListener("click", convertTemperature);
});