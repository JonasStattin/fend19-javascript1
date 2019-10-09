const targetArea = document.querySelector('#target')
const targetAreaMsgField = targetArea.querySelector('h1')

targetArea.addEventListener('mouseover', function(event) {
  targetArea.classList.replace('off', 'on')
  targetAreaMsgField.textContent = "You caught me!? 😮"
})

targetArea.addEventListener('mouseout', function(event) {
  targetArea.classList.replace('on', 'off')
  targetAreaMsgField.textContent = "You can't catch me 😎"
})
