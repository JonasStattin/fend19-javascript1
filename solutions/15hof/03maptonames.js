const users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 }
]
const names = users.map(function(user) {
  return user.name
})
console.log(names) // John, Pete, Mary
