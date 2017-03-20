'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const PO = db.define('po', {
  quantity: Sequelize.INTEGER,
  unit_price: Sequelize.FLOAT,
  description: Sequelize.STRING,
  document: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM('initiated', 'approved', 'ordered', 'delivered', 'claim' , 'paid'),
    defaultValue: 'initiated'
  },
  due_date: Sequelize.DATE,
  paid_at: Sequelize.DATE
}, {
  instanceMethods: {}
})

module.exports = PO