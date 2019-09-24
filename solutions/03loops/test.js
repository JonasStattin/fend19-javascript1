let output = ''
const grid = 8
for(let i= 0; i < grid*grid; i++) {
  if (i % 2 === 0) {
    output += ' '
  } else {
    output += '#'
  }
  if (i % grid === 0) {
    output += '\n'
  }
}
console.log(output)