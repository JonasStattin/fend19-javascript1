function makeUpperCase(str) {
  return new Promise(function(resolve, reject) {
    if (typeof str === 'string') {
      const upperCaseStr = str.toUpperCase()
      resolve(upperCaseStr)
    } else {
      reject('Not a string')
    }
  })
}

makeUpperCase('jonas').then(function(result) {
  console.log(result) // JONAS
})

makeUpperCase(5).catch(function(error) {
  console.log(error) // Not a string
})
