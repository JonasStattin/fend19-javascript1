const CHIP_PRICE = 25
const CANDY_PRICE = 3
let moneyInAccount = 1000

let noChipBags = 0
let noCandies = 0

while (moneyInAccount > CHIP_PRICE) {
  noChipBags++
  moneyInAccount -= CHIP_PRICE
}

while (moneyInAccount > CANDY_PRICE) {
  noCandies++
  moneyInAccount -= CANDY_PRICE
}

console.log(noChipBags)
console.log(noCandies)
console.log(moneyInAccount)
