const nameField = document.querySelector('#name')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

btn.addEventListener('click', function() {
  output.textContent = `Hello ${nameField.value}!`
})
