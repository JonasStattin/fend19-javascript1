const ageField = document.querySelector('#age')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

function numOnlyVoteCheck(age) {
  if (isNaN(age) === true) { return `${age} är inte en ålder` }
  return age >= 18 ? "Du får rösta" : "Du får INTE rösta"
}

btn.addEventListener('click', function() {
  output.textContent  = numOnlyVoteCheck(ageField.value)
})
