const box = document.querySelector('.box')
const tooltip = document.createElement('p')
tooltip.classList.add('tooltip')
box.appendChild(tooltip)

box.addEventListener('mouseenter', function(event) {
  tooltip.textContent = event.target.dataset.tooltip
  tooltip.classList.add('show')
})

box.addEventListener('mouseleave', function(event) {
  tooltip.classList.remove('show')
})
