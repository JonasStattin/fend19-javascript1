function hasProperty(obj, key) {
  return typeof obj[key] !== 'undefined' && obj[key] !== null
}

const myObj = { id: 1, name: 'Jonas' }
console.log(hasProperty(myObj, 'name')) // true
console.log(hasProperty(myObj, 'surname')) // false
myObj.name = null
console.log(hasProperty(myObj, 'name')) // false
