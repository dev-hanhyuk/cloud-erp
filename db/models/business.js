'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Business = db.define('business', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  mobile: Sequelize.STRING,
  address: Sequelize.STRING
})

module.exports = Business