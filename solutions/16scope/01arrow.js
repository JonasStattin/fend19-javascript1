/*
const sayHi = function() {
  alert('Hi!')
}
*/

const sayHi = () => alert('Hi!')

// sayHi()

/*
const double = function(n) {
  return n * 2
}
*/

const double = n => n * 2

console.log(double(4)) // 4

/*
function isEven(val) {
  return val % 2 === 0
}
*/

const isEven = val => val % 2 === 0

console.log(isEven(10))

/*
const sum = function(a, b) {
  return a + b
}
*/

const sum = (a, b) => a + b

console.log(sum(1, 2))

/*
function filterRange(arr, a, b) {
  return arr.filter(function(item) {
    return a <= item && item <= b
  })
}
*/

const filterRange = (arr, a, b) => arr.filter(item => a <= item && item <= b)

const values = [5, 3, 8, 1]
console.log(filterRange(values, 1, 4)) // [3, 1]

