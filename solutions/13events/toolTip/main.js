const box = document.querySelector('.box')
let tooltip

box.addEventListener('mouseenter', function(event) {
  tooltip = document.createElement('p')
  tooltip.textContent = event.target.dataset.tooltip
  tooltip.classList.add('tooltip')
  box.appendChild(tooltip)
})

box.addEventListener('mouseleave', function(event) {
  box.removeChild(tooltip)
})