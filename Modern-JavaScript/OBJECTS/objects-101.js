// Objects

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// CHALLENGE ELEVEN

// Create an object with properties of name, age and location
// then create a string message.
// Also increase the age by 1 to print a new message

let myProfile = {
    name: 'Camille',
    age: 47,
    location: 'Califonia'
}

console.log(`${myProfile.name} is ${myProfile.age} and lives in ${myProfile.location}.`)

myProfile.age = myProfile.age + 1

console.log(`${myProfile.name} is ${myProfile.age} and lives in ${myProfile.location}.`)


