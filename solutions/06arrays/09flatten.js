function flatten(arr) {
  const returnArr = []
  for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr[i].length; j++) {
      returnArr.push(arr[i][j])
    }
  }
  return returnArr
}

const myMultiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(flatten(myMultiArray)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
