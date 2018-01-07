const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const config = require('./config/main')

const app = express()

mongoose.connect(config.database)
mongoose.Promise = global.Promise

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

const router = require('./router')
router(app)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' })
})

app.set('port', config.port)

module.exports = app
