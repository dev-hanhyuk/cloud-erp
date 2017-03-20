import axios from 'axios'
import { UPDATE_PO, FETCH_ALL_POS } from '_actions'

export const request_PO = (payload) => dispatch => {
  //payload: quantity, unit_price
  axios.post(`/api/po/request`, payload)
    .then(res => dispatch({ type: UPDATE_PO, po: res.data }))
    .catch(err => console.error(err))
}

export const fetch_all_POs = () => dispatch => {
  axios.get(`/api/po`)
    .then(res => dispatch({ type: FETCH_ALL_POS, pos: res.data }))
    .catch(err => console.error(err))
}