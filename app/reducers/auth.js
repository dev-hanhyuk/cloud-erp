import { AUTHENTICATE } from '_actions'

const INITIAL_STATE = {
  email: '',
  department: '',
  level: 0
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTHENTICATE: return action.auth;
    default: return state;
  }
}