function sumrow(arr, row) {
  let total = 0
  for (let i = 0; i<arr[row].length; i++) {
    total += arr[row][i]
  }
  return total
}

const myMultiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(sumrow(myMultiArray, 1)) // 15
