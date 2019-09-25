function lowerCaseProperties(obj) {
  const returnObj = {}
  const pairs = Object.entries(obj)
  for (let i=0; i<pairs.length; i++) {
    returnObj[pairs[i][0].toLowerCase()] = pairs[i][1]
  }
  return returnObj
}

const myObj = {
  Name: 'Jonas',
  SurName: 'Stattin'
}
const newObj = lowerCaseProperties(myObj)
console.log(myObj) // { Name: 'Jonas', SurName: 'Stattin' }
console.log(newObj) // { name: 'Jonas', surname: 'Stattin' }
