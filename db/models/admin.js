'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Admin = db.define('admin', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  mobile: Sequelize.STRING,
  address: Sequelize.STRING,
  level: Sequelize.INTEGER
})

module.exports = Admin