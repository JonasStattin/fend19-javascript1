const artistField = document.querySelector('#artist')
const recordField = document.querySelector('#record')
const btn = document.querySelector('#btn')
const collection = document.querySelector('#collection')

btn.addEventListener('click', function() {
  const li = document.createElement('li')
  li.textContent =  artistField.value + ': ' + recordField.value
  recordField.value = ''
  artistField.value = ''
  collection.appendChild(li)
})
