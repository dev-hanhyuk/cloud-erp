'use strict';
const db = require('../index')

const PO = require('./PO')
const Admin = require('./admin')
const Business = require('./business')
const Inventory = require('./inventory')

/* PO - admin relations */
PO.belongsTo(Admin, {as: 'initiated'})
PO.belongsTo(Admin, {as: 'team_mgr'})
PO.belongsTo(Admin, {as: 'ceo'})
PO.belongsTo(Admin, {as: 'treasury'})

Inventory.belongsTo(PO); //inventory.setPO(po_id)
PO.hasOne(Inventory);

PO.belongsTo(Business, { as: 'supplier'})



module.exports = { PO, Admin, Business, Inventory};