// Function Scope

// Global scope (convertFahrenheitToCelsius, celsiusTemp, otherCelsiusTemp)
   // Local scope (fahrenheit, celsius)
      // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);

    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius
}

let celsiusTemp = convertFahrenheitToCelsius(32)
let otherCelsiusTemp = convertFahrenheitToCelsius(68)
console.log(celsiusTemp)
console.log(otherCelsiusTemp)