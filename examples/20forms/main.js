const products = [
  'Banana',
  'Apple',
  'Pineapple',
  'Pear',
  'Strawberry'
]

const filterField = document.querySelector('#filter')
filterField.addEventListener('input', function(event) {
  const filteredProducts = products.filter(function(product) {
    return product.toLowerCase().includes(
      event.currentTarget.value.toLowerCase()
    )
  })
  listProducts(filteredProducts)
})

function listProducts(productList) {
  const elementList = document.querySelector('#products')
  elementList.innerHTML = ''
  productList.forEach(function(product) {
    const li = document.createElement('li')
    li.textContent = product
    elementList.appendChild(li)
  })
}

listProducts(products)