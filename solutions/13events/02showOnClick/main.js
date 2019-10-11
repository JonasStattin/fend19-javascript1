const showBtn = document.querySelector('#show')
const content = document.querySelector('#content')

showBtn.addEventListener('click', function(event) {
  content.classList.remove('hide')
})
