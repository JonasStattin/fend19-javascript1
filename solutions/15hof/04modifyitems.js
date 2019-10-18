const users = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 }
]
const usersMapped = users.map(function(user) {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }
})
console.log(usersMapped)
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
