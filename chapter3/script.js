$(document).ready(() => {
  $('.click-me').on('click', (event) => {
    event.preventDefault()
    console.log('I caught a click!')
  })
})
