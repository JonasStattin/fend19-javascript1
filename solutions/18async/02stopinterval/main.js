const msg = document.querySelector('#msg')
const stop = document.querySelector('#stop')

const intervalID = setInterval(function() {
  msg.textContent = msg.textContent + 'Hey!'
}, 1000)

stop.addEventListener('click', function() {
  clearInterval(intervalID)
  msg.textContent = msg.textContent + 'Ok...'
})
