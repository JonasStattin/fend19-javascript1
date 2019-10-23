const jumpman = document.querySelector('#jumpman')
let isJumping = false
const startingPosition = 20
const jumpspeed = 10

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp' && !isJumping) {
    isJumping = true
    let currentPos = startingPosition
    let direction = 'up'
    const jumpInterval = setInterval(function() {
      jumpman.style.bottom = currentPos + 'px'
      if (direction === 'up') {
        currentPos += jumpspeed
        if (currentPos > 200) {
          direction = 'down'
        }
      } else {
        currentPos -= jumpspeed
        if (currentPos <= startingPosition) {
          jumpman.style.bottom = startingPosition + 'px'
          isJumping = false
          clearInterval(jumpInterval)
        }
      }
    }, 1000/60)
  }
})
