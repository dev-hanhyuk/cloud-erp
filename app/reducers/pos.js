import { FETCH_ALL_POS, UPDATE_PO } from '_actions'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_POS: return action.pos;
    case UPDATE_PO: return [...state, action.po];
    default: return state;
  }
}