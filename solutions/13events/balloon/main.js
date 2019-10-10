const balloon = document.querySelector('#balloon')
let fontSize = 16

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 38) {
    fontSize = fontSize * 2
    if (fontSize >= 512) {
      balloon.textContent = '💥'
    } else {
      balloon.style.fontSize = fontSize + 'px'
    }
  }
})