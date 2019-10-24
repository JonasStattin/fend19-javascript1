function loadImage(url) {
  return new Promise(function(resolve, reject) {
    const image = document.querySelector('#harold')
    image.addEventListener('load', resolve)
    image.src = url
  })
}

const cheerupBtn = document.querySelector('#cheerup')
const body = document.querySelector('body')
cheerupBtn.addEventListener('click', function() {
  loadImage('harold2.jpg').then(function() {
    const msg = document.createElement('h1')
    msg.textContent = 'All cheered up!'
    body.append(msg)
    body.removeChild(cheerupBtn)
  })
})