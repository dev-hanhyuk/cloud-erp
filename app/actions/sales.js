import axios from 'axios'
import { FETCH_SALES } from '_actions'
import { CASH, SALES, SALES_DISCOUNT, ACCOUNT_RECEIVABLE } from '_components/account/account_map'
import { post_entry } from '_actions/account'
import { decrease_inventory, sale_inventory } from '_actions/inventory'


export const fetch_sales = () => dispatch => {
  axios.get('/api/sales')
    .then(res => dispatch({ type: FETCH_SALES, sales: res.data}))
}

export const register_sale = (product_id, payload) => dispatch => {
  const { quantity, unit_price, discount } = payload;
  /* check out if there is enough inventory */
  dispatch(sale_inventory(product_id, { quantity: -quantity }))
  console.log('PRODUCT ID: ', product_id)
  dispatch(increase_sale(product_id, payload))
}

export const increase_sale = (product_id, payload) => dispatch => {
  const { quantity, unit_price, discount } = payload;
  let reference = null;

  axios.post(`/api/sales/${product_id}/register`, payload)
    .then(res => reference = res.data.id)
    .then(() => {
      const entry_to_post_sales = { credit: quantity * unit_price, description: 'Sales', reference };
      const entry_to_post_sales_discount = { credit: -discount, description: 'Sales_Discount', reference };
      const entry_to_post_AR = { debit: quantity * unit_price - discount, description: 'Account_Receivable', reference };
      dispatch(post_entry(SALES, entry_to_post_sales))
      dispatch(post_entry(SALES_DISCOUNT, entry_to_post_sales_discount))
      dispatch(post_entry(ACCOUNT_RECEIVABLE, entry_to_post_AR))
    })
    .then(() => dispatch(fetch_sales()))
    .catch(err => console.error(err))
}


export const collect_account_receivable = (sale_id, collect_amount) => dispatch => {
  // CASH / Account_Receivable
  dispatch(post_entry(CASH, { debit: collect_amount, description: 'CASH: collect AR', reference: sale_id }))
  dispatch(post_entry(ACCOUNT_RECEIVABLE, { debit: -collect_amount, description: 'AR collected', reference: sale_id } ))
}


export const change_sales_status = (sale_id) => dispatch => {
  //not yet implemented
  return
}