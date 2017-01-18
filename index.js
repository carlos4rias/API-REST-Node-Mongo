'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
  //res.send(200, { products: []})
  res.status(200).send({ products: []})
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
  console.log(req.body)
  //res.send(200, {message: 'The product has been received!'})
  res.status(200).send( {message: 'The product has been received!'})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(3000, () => {
  console.log(`Server runing at http://localhost:${port}`)
})
