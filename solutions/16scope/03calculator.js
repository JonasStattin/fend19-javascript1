const calculator = {
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
  read() {
    this.a = parseInt(prompt('a?'))
    this.b = parseInt(prompt('b?'))
  }
}

calculator.read()
alert( calculator.sum() )
alert( calculator.mul() )
