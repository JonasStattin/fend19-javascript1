const messages = [
  'WYD?',
  'Call your moms',
  'Fix laundry'
]

const notificationsList = document.querySelector('#notifications')

for (let i = 0; i<messages.length; i++) {
  const notification = document.createElement('li')
  notification.textContent = messages[i]
  notificationsList.appendChild(notification)

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'X'
  notification.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', function(event) {
    event.target.parentNode.remove()
  })
}
