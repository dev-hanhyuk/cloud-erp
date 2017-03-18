'use strict'

const api = module.exports = require('express').Router()

api
  .use('/business', require('./business'))
  .use('/products', require('./products'))
  .use('/accounts', require('./accounts'))
  .use('/sales', require('./sales'))
  .use('/invoices', require('./invoices'))
  .use('/inventory', require('./inventory'))
  .use('/assets', require('./assets'))


// error handler (send 500 error)
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// 404: no routes matched
api.use((req, res) => res.status(404).end())