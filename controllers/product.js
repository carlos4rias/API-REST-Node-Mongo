'use strict'

const Product = require('../models/product')

function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err)
      return res.status(500).send({ message: `Error ${err}`})
    if (!products)
      return res.status(404).send({ message: `There are not products to fetch`})

    res.status(200).send({ products })
  })
}

function getProduct (req, res) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if (err)
      return res.status(500).send({ message: `Error ${err}`})
    if (!product)
      return res.status(404).send({ message: `The product doesn't exist`})

    res.status(200).send({ product })
  })
}

function saveProduct (req, res) {
  //console.log('POST api/product')
  //console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, stored) => {
    if (err) {
      res.status(500).send({ message: `Error saving the data : ${err}`})
    }
    res.status(200).send({ message: stored})
  })
}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, product) => {
    if (err)
      return res.status(500).send({ message: 'An error has ocurred while trying to update'})
    res.status(200).send({product})
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err)
      res.status(500).send({ message: `An error has been ocurred ${err}`})
    product.remove(err => {
      if(err)
        res.status(500).send({ message: `An error has been ocurred ${err}`})
      res.status(200).send({ message: 'The product has been deleted correctly'})
    })
  })
}

module.exports = {
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct
}
