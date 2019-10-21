const balloon = document.querySelector('#balloon')
let fontSize = 16

function blowUp(callback) {
  const balloonInterval = setInterval(function() {
    fontSize += 1
    if (fontSize >= 512) {
      clearInterval(balloonInterval)
      balloon.textContent = '💥'
      callback()
    } else {
      balloon.style.fontSize = fontSize + 'px'
    }
  }, 1000/60)
}

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    blowUp(function() {
      const blamText = document.createElement('p')
      document.querySelector('body').prepend(blamText)
      blamText.textContent = 'BLAM!'
    })
  }
})
