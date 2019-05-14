const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost/wongles')

app.use(bodyParser.json())
app.use('/api', routes)

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
