const username = "admin"
const password = "TheMaster"

if (username === "admin") {
  if (password === "TheMaster") {
    console.log("Welcome!")
  } else if (password === "cancel") {
    console.log("Cancelled")
  } else {
    console.log("Wrong password")
  }
} else if(username === "cancel") {
  console.log("Cancelled")
} else {
  console.log("I don't know you")
}
