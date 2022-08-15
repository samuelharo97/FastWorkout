const button = document.querySelector('.send')
const form = document.querySelector('#form')

form.addEventListener('submit', function (event) {
  event = event || window.event
  event.preventDefault()
})

