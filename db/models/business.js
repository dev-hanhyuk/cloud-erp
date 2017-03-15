'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Business = db.define('business', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  business_name: Sequelize.STRING,
  business_type: Sequelize.ENUM('supplier', 'customer'),
  email: Sequelize.STRING,
  mobile: Sequelize.STRING,
  address: Sequelize.STRING,
  payment: Sequelize.JSON,
  order_history: Sequelize.ARRAY(Sequelize.STRING),
  birthday: Sequelize.DATEONLY
})

module.exports = Business