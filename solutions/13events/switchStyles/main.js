const switchBtn = document.querySelector('#switcher')
const article = document.querySelector('.hot')

switchBtn.addEventListener('click', function(event) {
  if (article.classList.contains('hot')) {
    article.classList.replace('hot', 'cool')
  } else {
    article.classList.replace('cool', 'hot')
  }
})
