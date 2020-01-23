const form = document.querySelector('form')
const input = document.querySelector('input')
const message = document.querySelector('#message')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = input.value
    fetch(`http://localhost:4000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            message.textContent = "location :" + " " + data.location
        })
    })
})