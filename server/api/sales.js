'use strict'

const router = require('express').Router()
const db = require('../../db')
const Sale = db.model('sale')

module.exports = router


router.get('/', (req, res, next) => {
  Sale.findAll()
    .then(sales => res.send(sales))
    .catch(next)
})


router.post('/:productId/register', (req, res, next) => {
  Sale.create(req.body)
    .then(sale => {
      sale.setProduct(req.params.productId)
      res.send(sale)
    })
    .catch(next)
})