const recordField = document.querySelector('#record')
const btn = document.querySelector('#btn')
const collection = document.querySelector('#collection')

btn.addEventListener('click', function() {
  const li = document.createElement('li')
  li.textContent = recordField.value
  recordField.value = ''
  collection.appendChild(li)
})
