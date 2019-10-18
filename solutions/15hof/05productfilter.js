/* 00. Data! */
const products = [
  {
    name: 'Three Weiss Men',
    style: 'weiss',
    abv: '4.5',
    price: '3'
  },
  {
    name: 'Blondie',
    style: 'blonde',
    abv: '6.5',
    price: '2.3'
  },
  {
    name: 'Saisons in the Sun',
    style: 'saison',
    abv: '4.8',
    price: '2.8'
  },
  {
    name: 'Palebearer',
    style: 'pale ale',
    abv: '4.8',
    price: '2.5'
  },
  {
    name: 'Red Live Redemption',
    style: 'amber',
    abv: '5.3',
    price: '3.2'
  },
  {
    name: 'Lead a Bitter Life',
    style: 'bitter',
    abv: '4.8',
    price: '2.4'
  },
  {
    name: 'Charlie Brown',
    style: 'brown ale',
    abv: '5.2',
    price: '2.2'
  },
  {
    name: 'Stand up and Stout',
    style: 'stout',
    abv: '8.8',
    price: '5'
  },
  {
    name: 'A Lover in Every Porter',
    style: 'porter',
    abv: '6.2',
    price: '4.2'
  },
  {
    name: 'Not Barely Wine',
    style: 'barley wine',
    abv: '12.2',
    price: '8.2'
  }
]

const colors = {
  light: ['weiss', 'blonde', 'saison', 'pale ale'],
  medium: ['amber', 'bitter', 'brown ale'],
  dark: ['stout', 'porter', 'barley wine']
}

/* 01. Add color property to products */
function styleToColor(style) {
  return Object.keys(colors).find(function(color) {
    return colors[color].includes(style)
  })
}

const mappedProducts = products.map(function(product) {
  return {
    name: product.name,
    style: product.style,
    abv: product.abv,
    price: product.price,
    color: styleToColor(product.style)
  }
})

/* 02. Create a filter menu */
const body = document.querySelector('body')
const menu = document.createElement('nav')

Object.keys(colors).forEach(function(color) {
  const filterBtn = document.createElement('button')
  filterBtn.dataset.color = color
  filterBtn.textContent = color
  menu.appendChild(filterBtn)

  filterBtn.addEventListener('click', function(event) {
    const filteredList = mappedProducts.filter(function(item) {
      return item.color === event.target.dataset.color
    })
    drawList(filteredList)
  })
})

body.appendChild(menu)

/* 03. Draw list */
const productList = document.createElement('ul')
body.appendChild(productList)

function drawList(list) {
  productList.innerHTML = ''

  list.forEach(function(item) {
    const listItem = document.createElement('li')
    listItem.textContent = `${item.name} (${item.abv}%) - ${item.price}€`
    productList.appendChild(listItem)
  })
}
