// Functions
// input - argument(s), code, output - return value

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// CHALLENGE EIGHT

// Create a function to convert fahrenheit to celsius

let convertFahrenheitToCelsius = function (fahrenheit) {
    let conversion = (fahrenheit - 32) * (5 / 9);
    return conversion
}

let celsiusTemp = convertFahrenheitToCelsius(32)
let otherCelsiusTemp = convertFahrenheitToCelsius(68)
console.log(celsiusTemp)
console.log(otherCelsiusTemp)