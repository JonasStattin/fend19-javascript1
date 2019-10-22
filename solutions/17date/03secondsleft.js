function getSecondsLeftToday() {
  const now = new Date()
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  let diff = tomorrow - now
  return Math.round(diff / 1000)
}

console.log(getSecondsLeftToday()) // 26818
