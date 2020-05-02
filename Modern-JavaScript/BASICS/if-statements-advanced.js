// If Statements - Continued

// else if clause - used if previous condition returns false then we can test a subsequent
// condition on the basis that a true value will return to execute the code block

// else clause - If previous conditions from the if and/or else/if statements are false then this code block will execute


let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// CHALLENGE SIX

// We want to use if/else statements to carry out a test on outside weather temperature recommendation

let temp = 45;

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice')
}
