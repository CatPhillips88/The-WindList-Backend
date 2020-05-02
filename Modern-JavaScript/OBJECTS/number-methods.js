// Number methods

let num = 103.941

// toFixed (method) - formats numbers after the decimal point or fixed-point 

console.log(num.toFixed(2)) // 103.94

// if there are no numbers to be formatted then 0 will be added

console.log(num.toFixed(8)) // 103.94100000

// Math.round (method) - rounded to the nearest integer

console.log(Math.round(num)) // 104

// Math.floor (method) - rounds to down to the nearest integer
console.log(Math.floor(num)) // 103

// Math.ceil (method) - rounds up to the nearest integer
console.log(Math.ceil(num)) // 104

// Math.random (method) - returns a number between 0 and 1

let randomNum = Math.random()
console.log(randomNum)

// if we don't want to generate a number between 0 and 1 
// we can use the equation below for any range

// range conversion from 0 to 1 TO 10 to 20
// 0 - 0.999999 (initial start)
// 0 - 9.999999 + 1
// 0 - 10.999999
// Math.floor() rounds the range down to the nearest integer 
// + min adding 10 to the existing integer number making the range number returned between 10 and 20

let min = 10
let max = 20

let otherNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(otherNum)

// CHALLENGE FIFTEEN 

// create a game which guesses a persons number 

// passing in a single argument 
// generate a random number in a given range then guess whether correct or not
// range: 1 - 5 true if correct or false if not correct

let makeGuess = function (num) {
    let min = 1
    let max = 5
    let guessNum = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(guessNum)
    return num === guessNum

}

console.log(makeGuess(2))