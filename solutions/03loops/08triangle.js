let output = ''
while(output.length < 7) {
  output += '#'
  console.log(output)
}

let output2 = ''
for(let i=0; i<7; i++) {
  output2 += '#'
  console.log(output2)
}

for(let i=0; i<7; i++) {
  let output3 = ''
  for(let j=0; j<=i; j++) {
    output3 += '#'
  }
  console.log(output3)
}
