// Undefined & Null

// Undefined
// When you create a variable but don't assign a value, it will be assigned a value of undefined

let name

if (name === undefined) {
    console.log('Please provide a name...')
} else {
    console.log(name)
}

// Undefined for function arguments

let square = function (num) {
    console.log(num)
}

// Undefined as function return default value

let result = square()
console.log(result)

// Null 
// When you do not want to assign value, you can use null. Unlike undefined, it intentional rather than a programming issue

// Null as assigned value

let age = 32

age = null

console.log(age)




