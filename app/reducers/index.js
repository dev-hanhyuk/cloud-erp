import { combineReducers } from 'redux'

import auth from './auth'
import pos from './pos'

const rootReducer = combineReducers({
  auth,
  pos
})

export default rootReducer