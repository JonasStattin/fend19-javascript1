const myFruitBasket = ['Banana', 'Apple', 'Mango']

for (let i = 0; i<myFruitBasket.length; i++) {
  myFruitBasket[i] = myFruitBasket[i].toLowerCase()
}

let ans
while (ans !== null && ans !== '') {
  ans = prompt('What fruit do you like?')
  
  if (myFruitBasket.includes(ans.toLowerCase())) {
    alert(`You got a ${ans}!`)
  } else if (ans !== null && ans !== '') {
    alert(`Sorry... we don't have ${ans}...`)
  } else {
    alert('No more fruit for you!')
  }
}
