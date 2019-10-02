function hasProperty(obj, key) {
  return typeof obj[key] !== 'undefined'
}

const myObj = { id: 1, name: 'Jonas' }
console.log(hasProperty(myObj, 'name')) // true
console.log(hasProperty(myObj, 'surname')) // false