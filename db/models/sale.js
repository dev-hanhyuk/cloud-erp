'use strict'

const Sequelize = require('sequelize')
const db = require('../index')

const Sale = db.define('sale', {
  entry_date: Sequelize.DATE,
  status: Sequelize.ENUM('ordered', 'shipped', 'delivered', 'canceled', 'returned'),
  due_date: Sequelize.DATEONLY,
  quantity: Sequelize.INTEGER,
  unit_price: Sequelize.FLOAT,
  discount: Sequelize.FLOAT,
  warranty_expiration: Sequelize.DATEONLY
}, {
  instanceMethods: {
    sub_total() {
      return this.quantity * this.unit_price - this.discount
    },

    net_total() {
      return this.sub_total() - this.tax
    }
  }
})


module.exports = Sale
