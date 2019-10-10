const trails = []
for (let i = 0; i<100; i++) {
  const trail = document.createElement('div')
  trail.style.position = 'absolute'
  trail.style.height = '6px'
  trail.style.width = '6px'
  trail.style.borderRadius = '3px'
  trail.style.background = 'teal'
  trails.push(trail)

  document.querySelector('body').appendChild(trail)
}

let counter = 0
document.addEventListener('mousemove', function(event) {
  counter++
  if (counter === trails.length) {
    counter = 0
  }
  trails[counter].style.left = event.clientX + 'px'
  trails[counter].style.top = event.clientY + 'px'
})
