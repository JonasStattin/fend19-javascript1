const toggleMenuBtn = document.querySelector('#toggleMenu')
const menu = document.querySelector('#menu')

toggleMenuBtn.addEventListener('click', function(event) {
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide')
    toggleMenuBtn.textContent = '🔽 Hide menu'
  } else {
    menu.classList.add('hide')
    toggleMenuBtn.textContent = '▶️ Show menu'
  }
})
