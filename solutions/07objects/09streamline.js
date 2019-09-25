function streamLine(answer, target) {
  const answerKeys = Object.keys(answer)
  const newObj = {}
  for (let i = 0; i<answerKeys.length; i++) {
    if (target[answerKeys[i]]) {
      newObj[answerKeys[i]] = target[answerKeys[i]]
    } else {
      newObj[answerKeys[i]] = ''
    }
  }
  return newObj
}

const correct = {
  name: '',
  address: '',
  email: ''
}

const user = {
  name: 'Jonas',
  job: 'Developer / Teacher'
}

console.log(streamLine(correct, user)) // { name: 'Jonas', address: '', email: '' }
