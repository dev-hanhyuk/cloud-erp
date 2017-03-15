import { FETCH_ACCOUNT } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ACCOUNT: return action.account;
    default: return state;
  }
}