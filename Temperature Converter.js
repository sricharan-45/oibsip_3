function tempConverter() {
    let temp = parseFloat(document.getElementById('temp').value);
    let unit = document.getElementById('Unit').value;
    let result = document.getElementById('result');
    if (isNaN(temp)) {
        result.innerHTML = 'Please enter a valid number';
        return;
    }
    if (unit === 'Select one of below')
        result.innerHTML = 'Please select a unit';
    else if (unit === 'fahrenheit')
        result.innerHTML = 'Celsius: ' + ((temp - 32) * 5 / 9) + ' °C<br>Kelvin: ' + ((temp - 32) * 5 / 9 + 273.15) + ' °K<br>' + 'Reaumur: ' + (temp - 32) * (4 / 9) + ' °R';
    else if (unit === 'kelvin')
        result.innerHTML = 'Celsius: ' + (temp - 273.15) + ' °C<br>Fahrenheit: ' + ((temp - 273.15) * 9 / 5 + 32) + ' °F<br>' + 'Reaumur: ' + (temp - 273.15) * (4 / 5) + ' °R';
    else if (unit === 'celsius')
        result.innerHTML = 'Fahrenheit: ' + ((temp * 9 / 5) + 32) + ' °F<br>Kelvin: ' + (temp + 273.15) + ' °K<br>' + 'Reaumur: ' + (temp) * (4 / 5) + '°R';
    else if (unit === 'reaumur')
        result.innerHTML = 'Fahrenheit: ' + ((temp * 9 / 4) + 32) + ' °F<br>Kelvin: ' + ((temp * 5 / 4) + 273.15) + ' °K<br>' + 'Celsius: ' + (temp * 5 / 4) + ' °C';
}