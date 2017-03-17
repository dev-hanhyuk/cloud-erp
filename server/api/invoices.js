'use strict'

const router = require('express').Router()
const db = require('../../db')
const Invoice = db.model('invoice')

module.exports = router


router.get('/', (req, res, next) => {
  Invoice.findAll()
    .then(sales => res.send(sales))
    .catch(next)
})

router.post('/register', (req, res, next) => {
  Invoice.create(req.body)
    .then(sale => {
      // product.setRegistered(req.params.adminId);
      res.send(sale)
    })
    .catch(next)
})