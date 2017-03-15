'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Account = db.define('account', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.ENUM(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'COST']),
  subcategory: Sequelize.ENUM(['CURRENT_ASSET', 'NON_CURRENT_ASSET', 'CURRENT_LIABILITY', 'NON_CURRENT_LIABILITY', 'EQUITY', 'REVENUE', 'COST'])
})

module.exports = Account
