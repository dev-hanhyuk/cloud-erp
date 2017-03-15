import { FETCH_ACCOUNTS } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ACCOUNTS: return action.accounts;
    default: return state;
  }
}