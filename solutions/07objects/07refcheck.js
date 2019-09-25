function addProp(obj, key, value) {
  obj[key] = value
}

const myObj = {
  id: 1
}
addProp(myObj, 'favAnimal', 'cat')
console.log(myObj)
