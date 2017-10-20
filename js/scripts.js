// Business (or back-end) logic:
function convertToCelsius(fahrenheitTemperature) {
  // T(°C) = (T(°F) - 32) × 5/9
  return Math.round((fahrenheitTemperature - 32) * 5 / 9);
}

function convertTofahrenheit(celsiusTemperature) {
  // T(°F) = T(°C) × 9/5 + 32
  return Math.round(celsiusTemperature * 9 / 5 + 32);
}

//Everything below this line is user interface (or front-end) logic:
$('form#fahrenheit').submit(function(event) {
  event.preventDefault();
  alert('fahrenheit form submitted');
});
