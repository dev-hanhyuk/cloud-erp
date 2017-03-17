import axios from 'axios'
import { FETCH_INVOICE, FETCH_INVOICES } from '_actions'


export const fetch_invoice = (invoice_id) => dispatch => {
  axios.get(`/api/invoices/${invoice_id}`)
    .then(res => dispatch({ type: FETCH_INVOICE, invoice: res.data }))
    .catch(err => console.error(err))
}

export const fetch_invoices = () => dispatch => {
  axios.get(`/api/invoices`)
    .then(res => dispatch({ type: FETCH_INVOICES, invoices: res.data }))
    .catch(err => console.error(err))
}