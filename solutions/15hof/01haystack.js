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
  return list.find(function(item) {
    return item.name === name
  })
}

console.log(findByName('Needle', hayStack)) // {id: 2, name: "Needle"}
