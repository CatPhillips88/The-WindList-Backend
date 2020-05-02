// Object Functions

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

// enables the function to be reusable for multiple return statements
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.summary) // 1984 by George Orwell
console.log(otherBookSummary.pageCountSummary) // A People's History is 723 pages long


// CHALLENGE TWELVE 

// Use object function to convert fahrenheit to both celsius and kelvin
// Create function take fahrenheit in and return an object showing all three

// let celsius = (fahrenheit - 32) * (5 / 9);

// let kelvin = (fahrenheit + 459.67) * (5 / 9);

let tempConversion = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}

let convertATemp = tempConversion(32)
console.log(convertATemp)



