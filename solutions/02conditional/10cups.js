const CUP_PRICE = 12
const DAYS_PER_MONTH = 30
const DISCOUNT_LIMIT = 1000
const DISCOUNT = 10

const tommysCuppaCawfeePerDay = 2
const totalSpent = tommysCuppaCawfeePerDay * DAYS_PER_MONTH * CUP_PRICE

if (totalSpent >= DISCOUNT_LIMIT) {
  console.log('You get the discount:', (totalSpent * DISCOUNT) / 100, 'spänn!')
} else {
  const difference = DISCOUNT_LIMIT - totalSpent
  const differenceMinusRest = difference - difference % CUP_PRICE
  const cupsNeeded = differenceMinusRest / CUP_PRICE + 1
  console.log('You need to get', cupsNeeded, 'more cuppa cawfee')
}
