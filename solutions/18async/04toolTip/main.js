const box = document.querySelector('.box')
const tooltip = document.createElement('p')
tooltip.classList.add('tooltip')
box.appendChild(tooltip)

let timer = 0

box.addEventListener('mouseenter', function(event) {
  timer = setTimeout(function() {
    tooltip.textContent = event.target.dataset.tooltip
    tooltip.classList.add('show')
  }, 400)

})

box.addEventListener('mouseleave', function(event) {
  tooltip.classList.remove('show')
  clearTimeout(timer)
})
