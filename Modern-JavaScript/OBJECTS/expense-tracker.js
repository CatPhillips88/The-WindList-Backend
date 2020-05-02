// Expense Tracker

// addIncome to account - addIncome

// function - resetAccount both expenses and income  - needs to know  which account to change

// getAccountSummary - current account balance
// Account for Catherine has $900. $1000 in income and $100 in expenses

// TESTING THE EXERCISE
// addIncome 
// addExpense
// addExpense
// getAccountSummary
// then resetAccount
// getAccountSummary

let myAccount = {
    name: 'Florina Moxi',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let accountBalance = account.income - account.expenses
    return `Account for ${account.name} has $${accountBalance}. $${account.income} in income and $${account.expenses} in expenses`
}



addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 20)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))













