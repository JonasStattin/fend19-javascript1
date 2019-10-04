function numOnlyVoteCheck(age) {
  if (isNaN(age) === true) { return `${age} är inte en ålder` }
  return age >= 18 ? "Du får rösta" : "Du får INTE rösta"
}

const ans = prompt('Hur gammal är du?')
alert(numOnlyVoteCheck(ans))
