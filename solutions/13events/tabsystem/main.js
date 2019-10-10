const tabBtns = document.querySelectorAll('[data-tab]')
const tabContent = document.querySelectorAll('[data-content]')

for (let i = 0; i<tabBtns.length; i++) {
  tabBtns[i].addEventListener('click', function(event) {
    for (let j = 0; j<tabContent.length; j++) {
      tabContent[j].classList.add('hide')
    }
    document.querySelector(`[data-content="${event.target.dataset.tab}"]`).classList.remove('hide')
  })
}
