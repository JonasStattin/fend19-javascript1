function countChars(str, letter) {
  let count = 0
  for(let i=0; i<str.length; i++) {
    if(str[i] === letter) { count++ }
  }
  return count
}

console.log(countChars('My Bad My Man', 'M'))
