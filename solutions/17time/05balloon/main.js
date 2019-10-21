const balloon = document.querySelector('#balloon')
let fontSize = 16

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    const balloonInterval = setInterval(function() {
      fontSize += 1
      if (fontSize >= 512) {
        clearInterval(balloonInterval)
        balloon.textContent = '💥'
      } else {
        balloon.style.fontSize = fontSize + 'px'
      }
    }, 1000/60)
  }
})
