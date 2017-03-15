'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Inventory = db.define('inventory', {
  entry_date: Sequelize.DATE,
  entry_type: Sequelize.ENUM('purchased', 'sold'),
  quantity: Sequelize.INTEGER,
  unit_price: Sequelize.FLOAT
}, {
  instanceMethods: {
    sub_total() { return this.quantity * this.unit_price }
  }
})


module.exports = Inventory