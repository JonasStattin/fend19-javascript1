const CHIP_PRICE = 25
const CANDY_PRICE = 3
let moneyInAccount = prompt('Hur mycket pengar har du på kontot?')

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

alert(`Det räcker till ${noChipBags} chipspåsar, ${noCandies} smågodisar och du har ${moneyInAccount}:- kvar!`)
