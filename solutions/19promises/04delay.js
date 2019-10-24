function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve()
    }, ms)
  })
}

delay(1000).then(function() {
  console.log('We waited')
})
