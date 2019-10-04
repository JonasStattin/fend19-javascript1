const username = prompt('Enter username:')

if (username === "admin") {
  const password = prompt('Enter password:')
  if (password === "TheMaster") {
    alert("Welcome!")
  } else if (password === "" || password === null) {
    alert("Cancelled")
  } else {
    alert("Wrong password")
  }
} else if(username === "" ||username === null) {
  alert("Cancelled")
} else {
  alert("I don't know you")
}
