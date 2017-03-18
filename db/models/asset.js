'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Asset = db.define('asset', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  serial_number: Sequelize.STRING,
  name: Sequelize.STRING,
  location: Sequelize.ENUM('loc1', 'loc2', 'loc3'),
  quantity: Sequelize.INTEGER,
  unit_price: Sequelize.FLOAT,
  depreciation_method: Sequelize.ENUM('none', 'stream-line', 'accelerated'),
  depreciation_cost: Sequelize.FLOAT,
  accumulated_depreciation: Sequelize.FLOAT,
  salvage_value: Sequelize.FLOAT,
  net_gain: Sequelize.FLOAT,
  description: Sequelize.STRING
}, {
  instanceMethods: {
    acquisition_cost: function() { return this.quantity * this.unit_price },
    net_gain: function() { return this.salvage_value - (this.acquisition_cost() - this.accumulated_depreciation)}
  }
})

module.exports = Asset
