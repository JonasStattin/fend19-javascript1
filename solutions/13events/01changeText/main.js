const changeBtn = document.querySelector('#changer')
const messageField = document.querySelector('#message')

changeBtn.addEventListener('click', function(event) {
  messageField.textContent = 'Please leave! 😡'
})
