import axios from 'axios'
import { PURCHASE_INVENTORY, FETCH_INVENTORIES } from '_actions'
import { CASH, COGS, INVENTORY, ACCOUNT_PAYABLE } from '_components/account/account_map'
import { post_entry } from '_actions/account'


export const fetch_inventories = () => dispatch => {
  axios.get(`/api/inventory`)
    .then(res => dispatch({ type: FETCH_INVENTORIES, inventories: res.data }))
    .catch(err => console.error(err))
}

export const purchase_inventory = (product_id, payload) => dispatch => {
  // INVENTORY / ACCONT_PAYABLE
  const { quantity, unit_price, description } = payload;
  dispatch(increase_inventory(product_id, payload))

}

export const sale_inventory = (product_id, payload) => dispatch => {
  const { quantity, unit_price, description } = payload;
  dispatch(decrease_inventory(product_id, payload))
}


export const increase_inventory = (product_id, payload) => dispatch => {
  let reference = '';
  const { quantity, unit_price, description } = payload;
  axios.post(`/api/inventory/${product_id}/purchase`, payload)
    .then(res => reference = res.data.id)
    .then(() => {
      dispatch(post_entry(INVENTORY, { debit: quantity * unit_price, description: `INVENTORY: ${description}`, reference}))
      dispatch(post_entry(ACCOUNT_PAYABLE, { credit: quantity * unit_price, description: `ACCOUNT_PAYABLE: ${description}`, reference}))
    })
    .catch(err => console.error(err))

}


export const decrease_inventory = (product_id, payload) => dispatch => {
  const { quantity, unit_price, description } = payload;//q is negative
  let inventory;
  return axios.post(`/api/inventory/${product_id}/decrease`, payload)
    .then(res => {
      inventory = res.data
      dispatch(post_entry(INVENTORY, ({ credit: quantity * unit_price , description: 'SALES', reference: inventory.id})))
      dispatch(post_entry(COGS, ({ debit: quantity * unit_price , description: 'COST OF GOODS SOLD', reference: inventory.id})))
    })
    .catch(err => console.error(err))
}

export const pay_account_payable = (i_id, pay_amount) => dispatch => {
  dispatch(post_entry(CASH, { debit: -pay_amount, description: 'CASH: AP payed', reference: i_id}))
  dispatch(post_entry(ACCOUNT_PAYABLE, { credit: -pay_amount, description: 'AP payed', reference: i_id} ))
}