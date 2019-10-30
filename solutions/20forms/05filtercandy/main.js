const allCandy = [
  'Pop Rocks',
  'Jawbreakers',
  'Jolly Ranchers',
  'Smarties',
  'Milk Duds',
  'Starburst',
  'Junior Mints',
  'Swedish Fish',
  'Milky Way',
  'Skittles',
]

const candylist = document.querySelector('#candylist')
const filterby = document.querySelector('#filterby')

function drawList(filteredCandy) {
  candylist.innerHTML = ''
  filteredCandy.forEach(function(candy) {
    const li = document.createElement('li')
    li.textContent = candy
    candylist.appendChild(li)
  })
}

filterby.addEventListener('input', function(event) {
  const searchFor = event.currentTarget.value.toLowerCase()
  const filteredCandy = allCandy.filter(function(candy) {
    return candy.toLowerCase().includes(searchFor)
  })
  drawList(filteredCandy)
})

drawList(allCandy)
