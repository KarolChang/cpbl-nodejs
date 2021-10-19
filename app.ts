import express from 'express'
import { Request, Response } from 'express'
import exphbs from 'express-handlebars'
import bodyParser from 'body-parser'

// .env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT || 3000

// set view engine
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

// set bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// require routes
require('./routes')(app)

// server run
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

module.exports = app