const wait = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve()
  }, 500)
})

wait.then(function() {
  console.log('We waited')
})
