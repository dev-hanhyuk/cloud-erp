'use strict'

const router = require('express').Router()
const db = require('../../db')
const Product = db.model('product')

module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next)
})

router.post('/register/:adminId', (req, res, next) => {
  Product.create(req.body)
    .then(product => {
      product.setRegistered(req.params.adminId);
      res.send(product)
    })
    .catch(next)
})