import { FETCH_ACCOUNT_ENTRIES } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ACCOUNT_ENTRIES: return action.entries;
    default: return state;
  }
}