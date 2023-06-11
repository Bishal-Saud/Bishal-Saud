function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let celsius = parseInt(prompt("enter celsius to covert in fahrenheit")) ;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);