function makeNumbers(obj) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    if (isNaN(parseInt(obj[keys[i]])) === false) {
      obj[keys[i]] = parseInt(obj[keys[i]])
    }
  }
}

const myObj = {
  name: 'Betty White',
  age: '97',
  salary: '100000',
  job: 'Actress'
}
makeNumbers(myObj)
console.log(myObj) // { name: 'Betty White', age: 97, salary: 100000, job: 'Actress' }
