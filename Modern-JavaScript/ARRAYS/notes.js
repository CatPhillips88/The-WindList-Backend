// Notes

// array values can be any data types
// there are a number of methods we can perform or mutate values in programming


// const notes = ['Note 1', 'Note 2', 'Note 3']

// Bracket notation

// If we want to access a specific value within the array, we use bracket notation and index positioning
// index always starts at 0 
// If there is no value present within the array then it returns a undefined value

// console.log(notes[0]) // 'Note 1'
// console.log(notes[3]) // undefined

// the following example starts at the end of the list to access value, keep in mind that 
// the minus number is not an index position 
// console.log(notes[notes.length - 1]) // Note 3

// Manipulating an array

// push (method) - adds a value to the end of the array

// pop (method) - removes last value of the array

// shift (method) - removes first value of the array

// unshift (method) - adds a value to the beginning of the array

// splice (method) - removes and/or replace values from an array by using a starting position then removing the number
// of items after alternatively in replacing you can use bracket index notation to reassign a value

// notes.push('my new note')

// notes.pop()

// notes.shift()

// notes.unshift('my first note')

// notes.splice(1, 1, 'this is the new second item')

// notes[2] = 'This is now the new note 3'


// Looping - forEach()

// forEach (method) - is a callback method which for every value within the array the function is carried out
// the function is never called directly instead the api call from forEach is called.

// The example below loops over the array using item and index as arguments from the callback function
// to display items within the array and their index positioning via console log

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes)

// Looping - for()

// for (statement)  - is a loop containing 3 expressions within the parentheses
// these expressions as used to execute code block, it gives more flexibility than
// the forEach method

// first you would need to declare a counter variable known as the initialiser 
// the counter variable is locally scoped


// then the second expression is a condition evaluating loop iteration which if true, the condition will execute the code
// however if false then the condition will stop executing code

// then third expression can either increment or decrement the counter upon the condition evaluating as true




// pseudocode: using a for loop over the notes array, the initialiser is set to 0
// the condition to be tested if the count is less than the length of the array which is 3
// then runs a true value and increments the counter by 1 until the condition gets to 3 
// which will stop execution of the code that prints each element of the array
// by accessing the element by index stored in count variable
// in the for statement the variable count becomes the new index


// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//    console.log(notes[count])
// }



// indexOf (method) 

// the indexOf method returns the first index of an element in the array
// otherwise -1 is returned if element undefined in array

// console.log(notes.indexOf('Note 2')) // returns 1
// console.log(notes.indexOf('note 2')) // returns -1 owing to case sensitivity


// findIndex (method) returns index of first element in array when a test condition via a function
// is satsified true or not false

// pseudocode (EXAMPLE 1): using the findIndex to execute a callback function where we search for a match within 
// the notes array of objects. 
// the argument (item) is used with dot notation to access object property value to compare using the 
// triple equals operator to search for a match and return its index which in this example is 3

// pseudocode (EXAMPLE 2): in this example rather than search for a match and returning its index position
// we've used a function with two arguments (notes - the array) and noteTitle which will pass a string
// we want to query using the comparision operator within findIndex method which returns a boolean value.
// If true, then object within the array will return however if false, returns undefined
// we added toLowerCase string method for case insensitivity


// find (method) returns the value of the array NOT the index of element searched if the condition is true

const notes = [{
   title: 'My next trip',
   body: 'I would like to go to Califonia'
}, {
   title: 'Habits to work on',
   body: 'Exercise'
}, {
   title: 'Office modification',
   body: 'Get a new seat'
}]

// findIndex EXAMPLE 1

// const index = notes.findIndex(function (item, index) {
//   return item.body === 'Get a new seat'
// })

// console.log(index)

// findIndex EXAMPLE 2

// const findNote = function (notes, noteTitle) {
//    const index = notes.findIndex(function (note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase()
//    })
//    return notes[index]
// }

// find EXAMPLE 1

const findNote = function (notes, noteTitle) {
   return notes.find(function (note, index) {
      return note.title.toLowerCase() === noteTitle.toLowerCase()
   })
}

const note = findNote(notes, 'Office modification')
console.log(note)

// this is a test





