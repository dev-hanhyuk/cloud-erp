import axios from 'axios'
import { FETCH_ALL_ASSETS } from '_actions'
import { post_entry } from '_actions/account'
import { CASH, ACCOUNT_PAYABLE } from '_components/account/account_map'

export const fetch_all_assets = () => dispatch => {
  axios.get(`/api/assets`)
    .then(res => dispatch({ type: FETCH_ALL_ASSETS, assets: res.data }))
    .catch(err => console.error(err))
}

export const register_asset = (payload) => dispatch => {
  //payload: id, serial_number, name, quantity, unit_price, description, depreciation_method, account_id
  axios.post(`/api/assets/register/`, payload)
    .then(() => dispatch(register_asset_entry(payload)))
    .then(() => dispatch(fetch_all_assets))
    .catch(err => console.error(err))
}



export const register_asset_entry = (payload) => dispatch => {
  //payload: id, serial_number, name, quantity, unit_price, description, depreciation_method, account_id
  // description, debit, credit, adjust_entry, reference, account_id, posted_id
  const { id, name, quantity, unit_price, account_id, description } = payload;
  const entry_to_post_ASSET = { debit: quantity * unit_price, description, account_id, reference: id, posted_id: 1 }
  const entry_to_post_AP = { credit: quantity * unit_price, description: `Account Payable: Asset Purchase: ${description}`, account_id: ACCOUNT_PAYABLE, reference: id, posted_id: 1 }
  dispatch(post_entry(account_id, entry_to_post_ASSET))
  dispatch(post_entry(ACCOUNT_PAYABLE, entry_to_post_AP))
}