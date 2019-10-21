function formatDate(date) {
  const diff = new Date() - date
  if (diff < 1000) {
    return 'right now'
  }

  const sec = Math.floor(diff / 1000)
  if (sec < 60) {
    return sec + ' sec. ago'
  }

  const min = Math.floor(diff / 60000)
  if (min < 60) {
    return min + ' min. ago'
  }

  let d = date
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2))

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}

console.log(formatDate(new Date(new Date - 1))) // "right now"

console.log(formatDate(new Date(new Date - 30 * 1000))) // "30 sec. ago"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))) // "5 min. ago"

console.log(formatDate(new Date(new Date - 86400 * 1000))) // yesterday's date like 20.10.19 19:20
