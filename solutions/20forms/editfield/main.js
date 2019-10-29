const editfield = document.querySelector('#editfield')
const body = document.querySelector('body')

editfield.addEventListener('click', function() {
  const input = document.createElement('input')
  input.type = 'text'
  input.value = editfield.textContent
  body.removeChild(editfield)
  body.appendChild(input)
  input.focus()

  input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      event.currentTarget.blur()
    }
  })

  input.addEventListener('blur', function() {
    editfield.textContent = input.value
    body.removeChild(input)
    body.appendChild(editfield)
  })
})
