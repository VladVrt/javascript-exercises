const convertToCelsius = function(temp) {
  let converted=((temp-32)*5/9).toFixed(1)
  return Number(converted);
};

const convertToFahrenheit = function(temp) {
  let converted=((temp*9/5)+32).toFixed(1)
  return Number(converted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
