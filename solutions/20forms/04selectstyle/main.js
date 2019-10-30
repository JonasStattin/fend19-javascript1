const stylepicker = document.querySelector('#stylepicker')
const content = document.querySelector('#content')

stylepicker.addEventListener('change', function(event) {
  /* Simplest, but least elegant, example
  content.classList.remove('sweet')
  content.classList.remove('rough')
  content.classList.remove('bateman')
  */

  /* Cool and flexible while-loop solution
  while(content.classList.length > 0) {
    content.classList.remove(content.classList[0])
  }
  */

  /* Lets just assume we only have one class at a time anyway */
  content.classList.remove(content.classList[0])

  content.classList.add(event.target.value)
})
