function reverseArray(arr) {
  const returnArr = []
  for (let i = arr.length -1; i>=0; i--) {
    returnArr.push(arr[i])
  }
  return returnArr
}

console.log(reverseArray(['a', 'b', 'c'])) // [ 'c', 'b', 'a' ]
