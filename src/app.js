const express = require('express')
const path = require('path')
const hbs = require('hbs')
const chalk = require('chalk')


const app = express()
const port = process.env.PORT || 3000
const name = 'Ahmed Mohmmed Abdelbast'

//? this is the paths configrations to handlebars
const pathToPublic = path.join(__dirname, '../public')
const pathToViews = path.join(__dirname, '../templates/views')
const pathToPartials = path.join(__dirname, '../templates/partials')

app.use(express.static(pathToPublic))

app.set('view engine', 'hbs')
app.set('views', pathToViews)
hbs.registerPartials(pathToPartials)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'We want to help you so please tell us about your problem',
        name
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'WE well tell you everything about us',
        name,
        head: 'The Info Page'
    })
})


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        console.log(chalk.red.inverse('The Address is not specified'));
        res.send({
            error: 'Sorry but you have to specifiy the address, please put an address'
        })

    } else {
        console.log(chalk.green.inverse('Everything is going smoth :)'));
        res.send({
            summary: "It's clear weather out there",
            location: 'Cairo',
            time: '10:30',
            address: req.query.address
        })
    }


})

app.get('/help/*', (req, res) => {
    res.render('help404')
})

app.get('*', (req, res) => {
    res.render('page404')
})

app.listen(port, () => console.log(`The Server is running on port ${port}`))