function sayHi(name, greeting = 'Hello', times = 1) {
  for (let i = 0; i<times; i++) {
    console.log(greeting + ' ' + name + '!')
  }
}
