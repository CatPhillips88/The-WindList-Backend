// Arguments & Template Strings

// Multiple Arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


// Default Arguments
// If no argument value into the function then we can set a default value that is used instead.
// The example uses a number and string but we can use other data types


let getScoreText = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// CHALLENGE NINE & TEN

// Tip Calculator: create a function that calculates a tip percentage (20%) added to a restaurant bill
// Use a template string to return the tip message 
// For example: A 25% Tip on $40 would be $10

let calculateTip = function (total, tipPercent = .2) {
    let finalTotal = total * tipPercent
    return `A ${tipPercent * 100}% Tip on ${total} would be $${finalTotal}`

}

let getTip = calculateTip(60)
console.log(getTip)

