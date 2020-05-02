// Scope 

// JavaScript uses lexical scope aka static scope meaning that a variable defined in one area of the programming
// may not be accessible in other areas.

// There are two types of scope - Global & Local
// Global scope - defined outside of all code blocks
// Local scope - defined within code blocks 

// In a scope you can access variables defined in that scope, or in any parent/ancestor

// Global Scope(varOne) 
// Local Scope (varTwo) 
// Local Scope (varFour) // nested block 
// Local Scope (varThree) 

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)
