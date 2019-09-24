function pow(a, b) {
  let val = 1
  for (let i = 0; i<b; i++) {
    val *= a
  }
  return val
}
