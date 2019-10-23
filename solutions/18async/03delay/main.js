function delay(func, wait) {
  setTimeout(function() {
    func()
  }, wait * 1000)
}

delay(function() {
  console.log('Log!')
}, 1)
