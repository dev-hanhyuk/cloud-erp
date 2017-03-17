import { FETCH_INVOICES } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_INVOICES: return action.invoices;
    default: return state;
  }
}