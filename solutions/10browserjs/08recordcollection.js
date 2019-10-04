const myRecords = []

let ans
while (ans !== null && ans !== '') {
  ans = prompt('Add another record to the collection!')
  if (ans !== null && ans !== '') {
    myRecords.push(ans)
  }
}

alert(myRecords)