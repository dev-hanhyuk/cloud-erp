import { FETCH_ALL_ASSETS } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_ASSETS: return action.assets;
    default: return state;
  }
}