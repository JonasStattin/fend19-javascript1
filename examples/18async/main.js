function moveBox(box, from, to, duration, callback) {
  const fps = 60
  const animationFrames = duration / (1000/fps)
  const totalChange = to - from
  const changePerFrame = totalChange / animationFrames
  let frames = 0
  let currentVal = from

  const intervalId = setInterval(function() {
    frames++
    currentVal += changePerFrame
    box.style.left = currentVal + 'px'

    if (frames >= animationFrames) {
      box.style.left = to + 'px'
      clearInterval(intervalId)
      callback()
    } 
  }, 1000/fps)
}

const myBox = document.querySelector('#square')

moveBox(myBox, 0, 200, 1500, function() {
  myBox.style.background = 'red'
})
