const trail = document.createElement('div')
trail.textContent = '👌'
trail.style.position = 'absolute'
trail.style.fontSize = '50px'
trail.style.cursor = 'pointer'

document.querySelector('body').appendChild(trail)

let isDragging = false
trail.addEventListener('mousedown', function(event) {
  isDragging = true
})

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    trail.style.left = event.clientX + 'px'
    trail.style.top = event.clientY + 'px'
  }
})

document.addEventListener('mouseup', function(event) {
  if (isDragging) {
    isDragging = false
  }
})
