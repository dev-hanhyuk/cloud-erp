'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Sale = db.define('sale', {
  status: Sequelize.ENUM('ordered', 'shipped', 'delivered', 'canceled', 'returned'),
  quantity: Sequelize.INTEGER,
  unit_price: Sequelize.FLOAT,
  discount: Sequelize.FLOAT,
  warranty_expiration: Sequelize.DATEONLY
}, {
  instanceMethods: {
    sub_total() {
      return this.quantity * this.unit_price - this.discount
    }
  }
})


module.exports = Sale


/*
    net_total() {
      return this.sub_total() - this.tax
    }
*/