
'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Inventory = db.define('inventory', {
  quantity: Sequelize.INTEGER,
  remainder: {
    type: Sequelize.INTEGER,
    defaultValue: this.quantity
  },
  unit_price: Sequelize.FLOAT,
  description: Sequelize.TEXT
}, {
  instanceMethods: {
    acquisition_cost() { return this.quantity * this.unit_price },
    net_balance() { return this.remainder * this.unit_price }
  }
})


module.exports = Inventory