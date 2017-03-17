import { FETCH_INVENTORIES } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_INVENTORIES: return action.inventories;
    default: return state;
  }
}