// Variables

// You cannot define a variable more than once but you can reassign with a new value
// Reassigning a variable
let petName = 'Marlon'
petName = 'Chester'

console.log(petName)

// There are rules related to variable names
// You can only use letters, underscore and dollar signs in variable naming for the 
// first character

let test_ = 2
let result = test_ + 4

console.log(result)

// Variable names cannot be reserved keywords
// See MDN web docs under lexical grammar - JavaScript reference

let let = 12 

console.log(let)