function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

const myObj = { id: 1 }
console.log(isEmpty(myObj)) // false
const otherObj = {}
console.log(isEmpty(otherObj)) // true
