'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Product = db.define('product', {
  pid: Sequelize.STRING,
  name: Sequelize.STRING,
  inventory_type: Sequelize.ENUM('material', 'in-progress', 'merchandise'),
  inventory_flow: Sequelize.ENUM('FIFO', 'LIFO', 'AVERAGE'),
  unit_type: Sequelize.ENUM('EA', 'l', 'lbs', 'kg', 'g'),
  description: Sequelize.TEXT
}, {
  instanceMethods: {},
  classMethods: {},
  hooks: {}
})


module.exports = Product