'use strict'

const router = require('express').Router()
const db = require('../../db')
const Business = db.model('business')

module.exports = router

router.get('/customers', (req, res, next) => {
  Business.findAll({ where: {business_type: 'customer'} })
    .then(customers => res.send(customers))
    .catch(next)
})

router.get('/suppliers', (req, res, next) => {
  Business.findAll({ where: {business_type: 'supplier'} })
    .then(suppliers => res.send(suppliers))
    .catch(next)
})

router.post('/register', (req, res, next) => {
  console.log(req.body)
  Business.create(req.body)
    .then(customer => res.send(customer))
    .catch(next)
})