// Scope Tree

// Global
  // Local
     // Local
  // Local

// Variable shadowing: when a variable declared in a certain scope has the same name defined in the outside scope
// Depending on the variable scoping you will access different values.  

// Leaked global: when we assign a value to variable that was never defined
// You avoid leaked globals by declaring a variable somewhere ie. let name = 'Jen' in the nested block

// let name = 'Catherine'

if (true) {
   let name = 'Michelle'

    if (true) {
      name = 'Jen' 
      console.log(name) // 'Jen'
    }
}

if (true) {
   console.log(name) // 'Catherine'
}