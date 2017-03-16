import { combineReducers } from 'redux'

import account from './account'
import accounts from './accounts'
import entries from './entries'

const rootReducer = combineReducers({
  account,
  accounts,
  entries
})

export default rootReducer