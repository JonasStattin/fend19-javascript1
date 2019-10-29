const sendform = document.querySelector('#sendform')
const errorlist = document.querySelector('#errors')

sendform.addEventListener('submit', function(event) {
  event.preventDefault()

  const usernameField = document.querySelector('#username')
  const emailField = document.querySelector('#email')
  const passwordField = document.querySelector('#password')

  let errors = []
  if (usernameField.value === '') {
    errors.push('Username can not be empty')
  }

  if (isNaN(parseInt(usernameField.value[0])) === false) {
    errors.push('Username can not start with a number')
  }

  if (emailField.value.includes('@') === false) {
    errors.push('E-mail must include @')
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const foundNumber = numbers.find(function(number) {
    return passwordField.value.includes(number)
  })
  if (typeof foundNumber === 'undefined') {
    errors.push('Password must include at least one number')
  }

  errorlist.innerHTML = ''
  if (errors.length > 0) {
    errors.forEach(function(error) {
      const li = document.createElement('li')
      li.textContent = error
      errorlist.appendChild(li)
    })
  } else {
    alert('Send form!')
  }
})
