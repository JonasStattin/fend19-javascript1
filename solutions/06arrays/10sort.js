function sort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

const myArr = [4111, 1, 322, 7, 6] 
console.log(sort(myArr)) // [ 1, 6, 7, 322, 4111 ]
