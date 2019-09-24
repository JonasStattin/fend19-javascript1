function checkSpam(str) {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase()

  return lowerStr.indexOf('viagra') !== -1 || lowerStr.indexOf('xxx') !== -1
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))
