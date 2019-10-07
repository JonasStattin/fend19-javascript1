// 1. Hitta elementet med ID "item_87363892"
console.log(document.getElementById('item_87363892'))

// 2. Hitta alla element med klassen "pull-left", loopa över listan, och console.log() varje item
const allPullLeft = document.querySelectorAll('.pull-left')
for (let i = 0; i < allPullLeft.length; i++) {
  console.log(allPullLeft[i])
}

// 3. Hur många children har elementet med klassen "media-body"?
const mediaBody = document.querySelector('.media-body')
console.log(mediaBody.children.length)

// 4. Traversering med siblings och children
// Hitta h1-elementet (h1)
// Utgå från det elementet och hitta previous sibling (header)
// Hitta första element child i denna sibling (div)
// Hitta första element child inuti detta element child (a)
// Hitta detta elements nästa sibling (a)
// Hitta första child node i denna sibling (Kista, Hässelby, Vällingb…)
const h1Element = document.querySelector('h1')
const h1PrevSibling = h1Element.previousElementSibling
const h1PrevSiblingFirstChild = h1PrevSibling.firstElementChild
const h1PrevSiblingFirstChildFirstChild = h1PrevSiblingFirstChild.firstElementChild
const h1PrevSiblingFirstChildFirstChildNextSibling = h1PrevSiblingFirstChildFirstChild.nextElementSibling
const h1PrevSiblingFirstChildFirstChildNextSiblingFirstChild = h1PrevSiblingFirstChildFirstChild.firstChild
console.log(h1PrevSiblingFirstChildFirstChildNextSiblingFirstChild)

// Skriv samma "traversering" på en rad
console.log(document.querySelector('h1').previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstChild)

// Hitta alla länkar, loopa över dem och visa länktexten
const allLinks = document.getElementsByTagName('a')
for (let i = 0; i < allLinks.length; i++) {
  console.log(allLinks[i].firstChild)
}

// 7. Vad är det som är till salu?
const headerLink = document.querySelector('h1 a')
console.log(headerLink.firstChild)

// 8. Vad kostar den?
const price = document.getElementsByClassName('list_price')
console.log(price[0].firstChild)

// 9. När lades produkten upp?
const time = document.getElementsByTagName('time')
console.log(time[0].firstChild)

// 10. Hitta elementet med attributet data-js
console.log(document.querySelector('[data-js]'))