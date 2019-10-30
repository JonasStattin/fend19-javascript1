const CUP_PRICE = 12
const DISCOUNT_LIMIT = 1000
const totalCupsNeeded = Math.ceil(DISCOUNT_LIMIT / CUP_PRICE)

const cupsField = document.querySelector('#cups')
const coffeecalculator = document.querySelector('#coffeecalculator')
const fromDateField = document.querySelector('#fromdate')
const toDatefield = document.querySelector('#todate')
const answerElem = document.querySelector('#answer')

const now = new Date()
const lastDayThisMonth = new Date(now.getFullYear(), now.getMonth()+1, 0)

cupsField.value = now.getDate()
fromDateField.value = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
toDatefield.value = `${lastDayThisMonth.getFullYear()}-${lastDayThisMonth.getMonth()+1}-${lastDayThisMonth.getDate()}`

coffeecalculator.addEventListener('submit', function(event) {
  event.preventDefault()

  const fromDate = new Date(fromDateField.value)
  const toDate = new Date(toDatefield.value)

  const days = (toDate - fromDate) / 1000 / 60 / 60 / 24
  const cupsSoFar = parseInt(cupsField.value)
  const cupsLeft = totalCupsNeeded - cupsSoFar
  const averageCupsPerDay = Math.ceil(cupsLeft / days)

  answerElem.textContent = `Du behöver dricka i genomsnitt ${averageCupsPerDay} koppar per dag`
})
