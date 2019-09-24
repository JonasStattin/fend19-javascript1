function checkIfSquare(arr) {
  const verticalSize = arr.length
  let isSquare = true
  for (let i = 0; i<verticalSize; i++) {
    if (arr[i].length !== verticalSize) {
      isSquare = false
    }
  }
  return isSquare
}

const myMultiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(checkIfSquare(myMultiArray)) // true
