// String Methods

let name = ' Bernardine Evaristo '

// Length (property) - returns string length

console.log(name.length)

// Convert string to uppercase (method)

console.log(name.toUpperCase())

// Convert to lower case (method)

console.log(name.toLowerCase())

// Includes (method) - returns a boolean value if one string is found in another

let password = 'abc123password098'
console.log(password.includes('pgdhghf'))

// Trim - removes extra whitespace from both ends

console.log(name.trim())

// CHALLENGE FOURTEEN

// create a function that validates a password - return boolean values true or false
// should pass in a password as an argument 
// then tests the condition: if length is more than 8 and does not contain the word 'password'
// then return true otherwise false

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }

    // if we deconstruct -  we can use return password.length > 8 && !password.includes('password')
    // which would have the same outcome
}
console.log(isValidPassword('asdfp')) // false
console.log(isValidPassword('abc123fg$%%*')) // true
console.log(isValidPassword('hdhfhgtebpasswordhahshsah')) // false



