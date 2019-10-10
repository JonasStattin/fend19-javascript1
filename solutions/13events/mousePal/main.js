const trail = document.createElement('div')
trail.textContent = '🥰'
trail.style.position = 'absolute'
trail.style.fontSize = '30px'

document.querySelector('body').appendChild(trail)

document.addEventListener('mousemove', function(event) {
  trail.style.left = event.clientX + 'px'
  trail.style.top = event.clientY + 'px'
})
