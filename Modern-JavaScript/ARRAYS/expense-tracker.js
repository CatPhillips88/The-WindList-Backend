// Expense Tracker

// expenses - two properties: description & amount

// addExpense (method) - two arguments: description & amount
//  create an object then add to list

// getAccountSummary (method) - total up all expenses - use forEach to go through every item in the expenses array
// get the amount object then add onto a variable
// then print message: 'Catherine Phillips has $1250 in expenses.'

const account = {
    name: 'Catherine Phillips',
    expenses: [],
    addExpense: function (description, amount) {
        return this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let total = 0
        this.expenses.forEach(function (item) {
         total = total + item.amount 
        })
        return `${this.name} has $${total} in expenses`
    }
}


account.addExpense('Rent', 950)
account.addExpense('coffee', 2)

console.log(account.getAccountSummary())



