import { FETCH_INVOICE } from '_actions'

const INITIAL_STATE = {}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_INVOICE: return action.invoice;
    default: return state;
  }
}