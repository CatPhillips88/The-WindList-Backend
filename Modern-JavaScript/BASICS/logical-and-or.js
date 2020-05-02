// Logical Operators: && and ||

let temp = 55

// Logical && opearator
// Tests whether both conditions are true, otherwise false

// Logical || operator
// Tests whether one condition is true meaning the whole condition will be true, otherwise false

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh, do what you want!')
}

// CHALLENGE SEVEN

// Create a restaurant reservation system, you want to check if guests are vegan or not vegan
// If both are vegan then offer only vegan dishes
// If at least one is vegan then offer some vegan dishes
// Else, offer anything on menu

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan dishes')
} else {
    console.log('Offer anything on menu')
}




