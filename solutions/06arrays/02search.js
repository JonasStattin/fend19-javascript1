function max(arr) {
  let max = arr[0]
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(max([6, 12, 5])) // 12
