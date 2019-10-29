const loginbtn = document.querySelector('#loginbtn')
const username = document.querySelector('#username')
const Password = document.querySelector('#password')

loginbtn.addEventListener('click', function(event) {
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
