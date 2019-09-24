const login = 'Director'

const message = login === 'Employee' ? 'Hello' : login === 'Director' ? 'Greetings' : login == '' ? 'No login' : ''
console.log(message)
