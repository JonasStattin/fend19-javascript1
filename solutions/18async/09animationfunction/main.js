function animate(from, to, duration, callback) {
  const totalFrames = duration / (1000/60)
  const changePerFrame = (to - from) / totalFrames
  let frames = 0
  let currentVal = from
  const intervalId = setInterval(function() {
    frames++
    currentVal += changePerFrame
    callback(currentVal)
    if (frames >= totalFrames) {
      clearInterval(intervalId)
    }
  }, 1000/60)
}

const clickBtn = document.querySelector('#clicker')
const circle = document.querySelector('#circle')

circle.style.background = '#33ee88'
circle.style.borderRadius = '50%'
circle.style.position = 'relative'
circle.style.width = '100px'
circle.style.height = '100px'

clickBtn.addEventListener('click', function() {
  animate(100, 200, 5000, function(value) {
    circle.style.width = value + 'px'
    circle.style.height = value + 'px'
  })
})
