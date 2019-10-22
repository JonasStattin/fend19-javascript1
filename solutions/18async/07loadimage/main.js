function loadImage(url, callback) {
  const image = document.querySelector('#harold')
  image.addEventListener('load', callback)
  image.src = url
}

const cheerupBtn = document.querySelector('#cheerup')
const body = document.querySelector('body')
cheerupBtn.addEventListener('click', function() {
  loadImage('harold2.jpg', function() {
    const msg = document.createElement('h1')
    msg.textContent = 'All cheered up!'
    body.append(msg)
    body.removeChild(cheerupBtn)
  })
})