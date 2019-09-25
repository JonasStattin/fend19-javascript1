const ArrayMaster = {
  getFirst: function(arr) {
    return arr[0]
  },
  getLast: function(arr) {
    return arr[arr.length -1]
  },
  getN: function(arr, pos) {
    return arr[pos] ? arr[pos] : -1
  },
  max: function(arr) {
    let max = arr[0]
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  },
  sum: function(arr) {
    let total = 0
    for (let i = 0; i<arr.length; i++) {
      total += arr[i]
    }
    return total
  }
}

console.log(ArrayMaster.getFirst([1, 2, 3])) // 1
console.log(ArrayMaster.getLast([1, 2, 3])) // 3
console.log(ArrayMaster.getN([1, 2, 3], 1)) // 2
console.log(ArrayMaster.max([6, 12, 5])) // 12
console.log(ArrayMaster.sum([1, 2, 3])) // 6
