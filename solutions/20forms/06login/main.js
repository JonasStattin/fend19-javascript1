const loginbtn = document.querySelector('#login')
const username = document.querySelector('#username')
const Password = document.querySelector('#password')

login.addEventListener('submit', function(event) {
  event.preventDefault()

  if (username.value === "admin") {
    if (password.value === "TheMaster") {
      alert("Welcome!")
    } else {
      alert("Wrong password")
    }
  } else {
    alert("I don't know you")
  }
})
