const ladder = {
  step: 0,
  up: function() {
    this.step++
  },
  down: function() {
    this.step--
  },
  showStep: function() {
    return this.step
  }
}

ladder.up()
ladder.up()
ladder.down()
console.log(ladder.showStep()) // 1
