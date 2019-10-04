const persons = [
  {
    name: 'Akira',
    age: 26,
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    name: 'Harry',
    age: 16,
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    name: 'Sherlock',
    age: 42,
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    name: 'Kristian',
    age: 33,
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
]

let ans
while (ans !== null && ans !== '') {
  ans = prompt('Who do you wanna ask about?')
  
  let person = false
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name.toLowerCase() === ans.toLowerCase()) {
      person = persons[i]
    }
  }

  if (person !== false) {
    ans = prompt(`What do you wish to know about ${person.name}?`)
    if (typeof person[ans] !== 'undefined') {
      alert(`${person.name}s ${ans} is ${person[ans]}`)
    } else if (ans !== null && ans !== '') {
      alert(`We dont know what ${person.name}s ${ans} is...`)
    }
  } else if (ans !== null && ans !== '') {
    alert(`We dont know who ${ans} is...`)
  }
}
