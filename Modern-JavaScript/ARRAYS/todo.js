// CHALLENGE SIXTEEN

// Create an array with 5 todos 
// Create a message: 'You have x todos'
// Then print the first and second to last items to the terminal
// Todo: walk the dog

const todos = ['Brush teeth', 'Wash face', 'Cream skin', 'Get dressed', 'Comb Hair']

const message = `You have ${todos.length} todos`

console.log(message)

// const first = `Todo: ${todos[0]}`
// const secondToLast = `Todo: ${todos[todos.length - 2]}`

// console.log(first)
// console.log(secondToLast)

// CHALLENGE SEVENTEEN

// Delete 3rd item 
// Add new item onto the end of array
// Remove first item from the list

// todos.splice(2, 1)
// todos.push('Put makeup on')
// todos.shift()
// console.log(todos)

// CHALLENGE EIGHTEEN

// Use forEach method to print the todos as a numbered list
// For example: 1. Brush Teeth

todos.forEach(function (item, index) {
   console.log(`${index + 1}. ${item}`)
})

// CHALLENGE NINETEEN

// Use for statement to print the todos as per the previous challenge

for (let i = 0; i < todos.length; i++) {
   console.log(`${i + 1}. ${todos[i]}`)
}