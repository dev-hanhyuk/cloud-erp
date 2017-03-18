'use strict';
const db = require('../index')

// const Customer = require('./customer')
const Product = require('./product')
const Sale = require('./sale')
const Inventory = require('./inventory')
const Business = require('./business')
const Admin = require('./admin')
const Account = require('./account')
const Entry = require('./entry')
const Invoice = require('./invoice')
const Asset = require('./asset')

Product.belongsTo(Admin, { as: 'registered'}) //creator

Sale.belongsTo(Admin, { as: 'sold'})
Product.hasOne(Sale)
Sale.belongsTo(Product)

Product.hasOne(Inventory)
Inventory.belongsTo(Product)
Inventory.belongsTo(Business)
Inventory.belongsTo(Admin, { as: 'inspector'})

Account.hasMany(Entry)
Entry.belongsTo(Account)
Entry.belongsTo(Admin, { as: 'posted' })

Invoice.hasMany(Sale)
Sale.belongsTo(Invoice)

Business.hasMany(Invoice, { as: 'customer' }) //customer.getInvoices
Invoice.belongsTo(Business, { as: 'customer' })
// Invoice.belongsTo(Customer) //invoice.getCustomer


Asset.belongsTo(Business, { as: 'sold_to'})
Asset.belongsTo(Business, { as: 'purchased_from'})
Asset.belongsTo(Account)


module.exports = { Sale, Invoice, Product, Inventory, Business, Admin, Account, Asset };