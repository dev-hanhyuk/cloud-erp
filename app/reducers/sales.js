import { FETCH_SALES } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SALES: return action.sales;
    default: return state;
  }
}