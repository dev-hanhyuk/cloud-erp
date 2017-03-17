const db = require('./index')


const createAdmins = () => db.Promise.map([
  { firstname: 'Han', lastname: 'Cho', email: 'hanhyuk83.cho@gmail.com', mobile: '111-111-1111', address: 'NEW YORK SOMEWHERE', level: 10 },
  { firstname: 'First', lastname: 'Last', email: 'email@gmail.com', mobile: '111-222-1112', address: 'NEW YORK SOMEWHERE', level: 5 }
], adm => db.model('admin').create(adm))

const createBusinesses = () => db.Promise.map([
  { firstname: 'Hayden', lastname: 'Allen', business_type: 'customer', email: 'hayden.allen@gmail.com', mobile: '123-456-1451', address: 'WhereamI', payment: {}, birthday: '1988-11-11'},
  { business_name: 'Business Company', business_type: 'supplier', email: 'business@company.com', mobile: '124-416-1121', address: 'WhereamI', payment: {}}
], b => db.model('business').create(b))

const createProducts = () => db.Promise.map([
  { pid: 'pid11351', name: 'product-no-1', inventory_type: 'merchandise', inventory_flow: 'FIFO', unit_type: 'EA', description: 'amazing product!', registered_id: 1},
  { pid: 'pid12442', name: 'product-no-2', inventory_type: 'merchandise', inventory_flow: 'LIFO', unit_type: 'lbs', description: 'awesomely great product!', registered_id: 2},
], p => db.model('product').create(p))


const createAccounts = () => db.Promise.map([
  {id: 11100, name: 'cash', description: 'Cash and Equivalent', category: 'ASSET', subcategory: 'CURRENT_ASSET'},
  {id: 11200, name: 'Account Receivables', description: 'Account Receivable', category: 'ASSET', subcategory: 'CURRENT_ASSET'},
  {id: 11300, name: 'Inventory', description: 'Inventory to sell', category: 'ASSET', subcategory: 'CURRENT_ASSET'},
  {id: 21100, name: 'Account Payables', description: 'Account Payables', category: 'LIABILITY', subcategory: 'CURRENT_LIABILITY'},
  {id: 31100, name: "Sharehoders' Equity", description: 'Equity', category: 'EQUITY', subcategory: 'EQUITY'},
  {id: 41100, name: "Sales", description: 'Sales Revenue', category: 'REVENUE', subcategory: 'REVENUE'},
  {id: 41200, name: "Sales Discount", description: 'Sales Discount', category: 'REVENUE', subcategory: 'REVENUE'},
  {id: 51100, name: "Cost of Goods Sold", description: 'Cost matching Sales', category: 'COST', subcategory: 'COST'}
], acct => db.model('account').create(acct))

const createEntries = () => db.Promise.map([
  {account_id: 11100, description: 'cash in-flow', debit: 100000, posted_id: 1},
  {account_id: 31100, description: 'equity: cash in-flow', credit: 100000, posted_id: 1}
], e => db.model('entry').create(e))

//{account_id: 11100, description: 'cash out-flow: inventory purchased in cash', debit: -3000, posted_id: 1},
//{account_id: 11300, description: 'Inventory', debit: 3000, posted_id: 1}
//{account_id: 11200, description: 'sales occurred', debit: 3000, posted_id: 2},
//{account_id: 21100, description: 'purchased inventory', credit: 3000, posted_id: 1},


db.didSync
  .then(() => db.sync({force: true}))
  .then(() => createAdmins())
  .then(() => createBusinesses())
  .then(() => createProducts())
  .then(() => createAccounts())
  .then(() => createEntries())
  .finally(() => db.close())