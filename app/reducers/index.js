import { combineReducers } from 'redux'

import account from './account'
import accounts from './accounts'
import entries from './entries'
import invoice from './invoice'
import invoices from './invoices'
import sales from './sales'
import inventories from './inventories'

const rootReducer = combineReducers({
  account,
  accounts,
  entries,
  invoice,
  invoices,
  sales,
  inventories
})

export default rootReducer