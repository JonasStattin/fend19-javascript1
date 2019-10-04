const theCompany = {
  name: 'The Company',
  adress: 'Mainstreet 101',
  city: 'Capital City',
  employess: ['Byron Thomas', 'Terius Gray', 'Dwayne Carter'],
  products: ['Big wheels', 'Medium wheels', 'Small wheels']
}

let ans
while (ans !== null && ans !== '') {
  ans = prompt('What do you want to know about the company?')
  
  if (typeof theCompany[ans] !== 'undefined') {
    alert(`${ans}: ${theCompany[ans]}`)
  } else if (ans !== null && ans !== '') {
    alert('We dont seem to have that information...')
  } else {
    alert('Have a nice day!')
  }
}
