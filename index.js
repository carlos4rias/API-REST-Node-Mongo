'use strict'

const mongoose = require('mongoose')
const config = require('./config')
const app = require('./app')

const port = config.port

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error trying to connect to the DB. MongoError: ${err}`)
  }

  console.log('DB connection established')
  app.listen(port, () => {
    console.log(`Server runing at http://localhost:${port}`)
  })
})
