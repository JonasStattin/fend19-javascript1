function getWeekDay(date) {
  const days = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'sön']

  return days[date.getDay()]
}

const date = new Date(2014, 0, 3) // 3 Jan 2014
console.log(getWeekDay(date)) // fre
