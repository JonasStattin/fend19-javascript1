function makeUpperCase(arr) {
  return new Promise(function(resolve, reject) {
    const upperArr = arr.map(function(item) {
      if (typeof item !== 'string') {
        reject('Not a string')
      }
      return item.toUpperCase()
    })
    resolve(upperArr)
  })
}

function sortWords(arr) {
  return new Promise(function(resolve, reject) {
    arr.forEach(function(item) {
      if (typeof item !== 'string') {
        reject('Not a string')
      }
    })
    resolve(arr.sort())
  })
}

const words = ['hello', 'are', 'you', 'ok?']

makeUpperCase(words)
  .then(function(uppercaseWords) {
    return sortWords(uppercaseWords)
  })
  .then(function(sortedWords) {
    console.log(sortedWords) // [ 'ARE', 'HELLO', 'OK?', 'YOU' ]
  })
