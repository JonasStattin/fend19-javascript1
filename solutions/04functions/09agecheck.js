function numOnlyVoteCheck(age) {
  if (typeof age !== 'number') { return `${age} är inte en ålder` }
  return age >= 18 ? "Du får rösta" : "Du får INTE rösta"
}
