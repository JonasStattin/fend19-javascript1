const salaries = {
  John: 20000,
  Ann: 26000,
  Pete: 23000
}

let sum = 0
let salaryValues = Object.values(salaries)
for (let i = 0; i<salaryValues.length; i++) {
  sum += salaryValues[i]
}

console.log(sum) // 69000
