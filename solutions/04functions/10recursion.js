function isEven(val) {
  if (val === 0) { return true }
  if (val === 1) { return false }
  return isEven(val - 2)
}

console.log(isEven(11))
