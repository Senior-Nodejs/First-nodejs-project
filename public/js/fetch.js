const form = document.querySelector('form')
const input = document.querySelector('input')
const message = document.querySelector('#message')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = input.value
    console.log('submitted')
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            message.textContent = "location : " + data.location
        })
    })
})