const product = document.getElementById('item_87363892')

const cloneProduct = product.cloneNode(true)

const body = document.querySelector('body')
body.appendChild(cloneProduct)

cloneProduct.querySelector('h1 a').textContent = 'hatt'
cloneProduct.querySelector('img').src = 'https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg'
cloneProduct.querySelector('.list_price').textContent = '150 kr'
cloneProduct.querySelector('time').textContent = 'Idag 13:37'


const newProduct = document.createElement('article')
body.appendChild(newProduct)

const newMainLink = document.createElement('a')
const newImg = document.createElement('img')
newImg.src = 'https://cdn.blocket.com/static/2/lithumbs/30/3084337223.jpg'
newProduct.appendChild(newMainLink)
newMainLink.appendChild(newImg)
newMainLink.href = 'https://www.blocket.se'


const mediaBody = document.createElement('div')
newProduct.appendChild(mediaBody)

const header = document.createElement('header')
mediaBody.appendChild(header)
const pullLeftDiv = document.createElement('div')
header.appendChild(pullLeftDiv)
const categoryLink = document.createElement('a')
categoryLink.textContent = 'Köksjox'
categoryLink.href = 'https://www.blocket.se'
const areaLink = document.createElement('a')
areaLink.textContent = 'Kista, Hässelby, Vällingb…'
areaLink.href = 'https://www.blocket.se'
pullLeftDiv.appendChild(categoryLink)
pullLeftDiv.appendChild(areaLink)
const newTime = document.createElement('time')
newTime.textContent = 'Idag 14:47'
header.appendChild(newTime)

const newH1 = document.createElement('h1')
mediaBody.appendChild(newH1)
const headerLink = document.createElement('a')
headerLink.textContent = 'Brödrost'
headerLink.href = 'https://www.blocket.se'
newH1.appendChild(headerLink)

const newPrice = document.createElement('p')
newPrice.textContent = '200 kr'
mediaBody.appendChild(newPrice)


newProduct.classList.add('item_row')
newImg.classList.add('item_image')
newMainLink.classList.add('item_link')
mediaBody.classList.add('media-body')
newH1.classList.add('media-heading')
pullLeftDiv.classList.add('pull-left')
headerLink.classList.add('item_link')
newPrice.classList.add('list_price')
