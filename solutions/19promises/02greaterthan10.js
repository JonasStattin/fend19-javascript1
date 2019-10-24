function greaterThan10(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve()
    } else {
      reject()
    }
  })
}

greaterThan10(12).then(function() {
  console.log('Success!')
})

greaterThan10(5).catch(function() {
  console.log('Fail!')
})
