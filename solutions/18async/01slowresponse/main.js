const sleepyhead = document.querySelector('#sleepyhead')
const wakeup = document.querySelector('#wakeup')
wakeup.addEventListener('click', function() {
  setTimeout(function() {
    sleepyhead.textContent = '😩 Why did you wake me up?'
  }, 2000)
})
