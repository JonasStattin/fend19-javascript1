// Steg 0: 
const product = document.getElementById('item_87363892')
const body = document.querySelector('body')

// Steg 1: Flytta rubriken
product.prepend(product.querySelector('h1'))

// Steg 2: Klona 
const cloneProduct = product.cloneNode(true)
body.appendChild(cloneProduct)

// Steg 3: Modifiera klonen
cloneProduct.querySelector('h1 a').textContent = 'Hatt'
cloneProduct.querySelector('.list_price').textContent = '150 kr'
cloneProduct.querySelector('img').src = 'https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg'
cloneProduct.querySelector('time').textContent = 'Idag 13:37'

// Steg 4a: Skapa grunden för en ny produkt
const newProduct = document.createElement('article')
body.appendChild(newProduct)

// Steg 4b: Lägg till en h1 med en a
const newH1 = document.createElement('h1')
newProduct.appendChild(newH1)
const headerLink = document.createElement('a')
headerLink.textContent = 'Brödrost'
headerLink.href = 'https://www.blocket.se'
newH1.appendChild(headerLink)

// Steg 4c: Skapa en länk med en bild inuti
const newMainLink = document.createElement('a')
newProduct.appendChild(newMainLink)
const newImg = document.createElement('img')
newMainLink.appendChild(newImg)
newMainLink.href = 'https://www.blocket.se'
newImg.src = 'https://cdn.blocket.com/static/2/lithumbs/30/3084337223.jpg'

// Steg 4d: Skapa mediabody
const mediaBody = document.createElement('div')
newProduct.appendChild(mediaBody)

// Steg 4e: Header i mediabodyn
const header = document.createElement('header')
mediaBody.appendChild(header)
const pullLeftDiv = document.createElement('div')
header.appendChild(pullLeftDiv)
const categoryLink = document.createElement('a')
pullLeftDiv.appendChild(categoryLink)
categoryLink.textContent = 'Köksjox'
categoryLink.href = 'https://www.blocket.se'
const areaLink = document.createElement('a')
pullLeftDiv.appendChild(areaLink)
areaLink.textContent = 'Kista, Hässelby, Vällingb…'
areaLink.href = 'https://www.blocket.se'
const newTime = document.createElement('time')
header.appendChild(newTime)
newTime.textContent = 'Idag 14:47'

// Steg 4f: Pris i mediabodyn
const newPrice = document.createElement('p')
mediaBody.appendChild(newPrice)
newPrice.textContent = '200 kr'

// Steg 5: Lägg till klasser på vissa element
newProduct.classList.add('item_row')
newImg.classList.add('item_image')
newMainLink.classList.add('item_link')
mediaBody.classList.add('media-body')
newH1.classList.add('media-heading')
pullLeftDiv.classList.add('pull-left')
headerLink.classList.add('item_link')
newPrice.classList.add('list_price')
