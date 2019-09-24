const size = 8
for(let i = 0; i<size; i++) {
  let output = ''
  let previousSquare = ' '
  if (i % 2 === 0) {
    previousSquare = '#'
  }
  for(let j = 0; j<size; j++) {
    if (previousSquare === ' ') {
      output += '#'
      previousSquare = '#'
    } else {
      output += ' '
      previousSquare = ' '
    }
  }
  console.log(output)
}

console.log('\n')

for(let i = 0; i<size; i++) {
  let output = ''
  for(let j = 0; j<size; j++) {
    if ((j + i) % 2 === 0) {
      output += ' '
    } else {
      output += '#'
    }
  }
  console.log(output)
}

console.log('\n')

let output = ''
for(let i = 0; i<size; i++) {
  for(let j = 0; j<size; j++) {
    if ((j + i) % 2 === 0) {
      output += ' '
    } else {
      output += '#'
    }
  }
  output += '\n'
}
console.log(output)
