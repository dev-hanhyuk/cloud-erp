'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Entry = db.define('entry', {
  description: Sequelize.STRING,
  debit: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  credit: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  adjust_entry: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  reference: {
    type: Sequelize.STRING
  }
}, {
  instanceMethods: {
    net_balance: function() {
      return this.debit - this.credit
    }
  }
})

module.exports = Entry
