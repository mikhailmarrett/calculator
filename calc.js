const prompt = require("prompt-sync")({ sigint: true });


let num1 = x
let num2 = y
//const operation = [`Add`, `Substract`, `Multiply`, `Divide`]

console.log("Welcome to Node CLI Calculator App")
console.log("")
console.log("Please read the acceptance criteria to get started.")
console.log("")
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.question('Who are you? ', function (name) {
  console.log(`Hey there ${name}!`)


  const operation = prompt(`What do you want to do: Add, Substract, Multiply, Divide ? `);

    switch(operation){

      case `Add`: x + y
      break
      
      case `Substract`: x - y
      break

      case `Multiply`: x * y
      break

      case `Divide`: x / y
      break

      default:
    }
    

  readline.close()
})
