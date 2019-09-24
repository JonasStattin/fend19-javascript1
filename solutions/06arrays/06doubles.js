function makeUnique(arr) {
  const newArray = []
  for (let i = 0; i<arr.length; i++) {
    if (newArray.includes(arr[i]) === false) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

console.log(makeUnique(['a', 'b', 'a'])) // ['a', 'b']
