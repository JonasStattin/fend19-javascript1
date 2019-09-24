function ucFirst(str) {
  const firstChar = str[0]
  return str.replace(firstChar, firstChar.toUpperCase())
}

console.log(ucFirst('john')) // John
