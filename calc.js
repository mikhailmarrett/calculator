const prompt = require("prompt-sync")({ sigint: true })

console.log("Welcome to Node CLI Calculator App")
console.log("")
console.log("Please read the acceptance criteria to get started.")
console.log("")

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("Who are you? ", function (name) {
  console.log(`Hey there ${name}!`)

for(let count = 1; count > 0;){
  const operation = prompt(
    `What do you want to do: Add, Substract, Multiply, Divide? `
  )
  const firstnumber = prompt(`What is your first number? `)
  const secondnumber = prompt(`What is your second number? `)
  const x = Number(firstnumber)
  const y = Number(secondnumber)

  switch (operation) {
    case `Add`:
      console.log(x + y)
      break

    case `Substract`:
      console.log(x - y)
      break

    case `Multiply`:
      console.log(x * y)
      break

    case `Divide`:
      console.log(x / y)
      break

    default:
  }
  const startover = prompt(`Would you let to continue Y/N? `)
  if (startover === `Y`) {
    count = 1
  } else {
    count = 0
    readline.close()
  }
}
  
})
