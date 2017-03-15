'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Invoice = db.define('invoice', {
  payment_method: Sequelize.JSON,
  billing_address: Sequelize.STRING,
  shipping_address: Sequelize.STRING
})

module.exports = Invoice
