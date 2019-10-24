const hayStack = [
  {
    id: 0,
    name: 'Straw'
  },
  {
    id: 1,
    name: 'Grass'
  },
  {
    id: 2,
    name: 'Needle'
  },
  {
    id: 3,
    name: 'Stick'
  }
]

function findByName(name, list) {
  return new Promise(function(resolve, reject) {
    const item = list.find(function(item) {
      return item.name === name
    })
    if (typeof item !== 'undefined') {
      resolve(item)
    } else {
      reject('Matching object not found')
    }
  })
}

findByName('Needle', hayStack).then(function(result) {
  console.log(result) // { id: 2, name: 'Needle' }
})

findByName('Football', hayStack).catch(function(error) {
  console.log(error) // Matching object not found
})
