const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const dbURI = require('./config/environment')

const app = express()

mongoose.connect(dbURI)

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.json())
app.use('/api', routes)

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
