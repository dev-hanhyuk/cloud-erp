import axios from 'axios'
import { FETCH_ACCOUNT, FETCH_ACCOUNTS, FETCH_ACCOUNT_ENTRIES } from '_actions'

export const fetch_accounts = () => dispatch => {
  axios.get('/api/accounts/')
    .then(res => dispatch({ type: FETCH_ACCOUNTS, accounts: res.data }))
    .catch(err => console.error(err))
}

export const fetch_all_entries = () => dispatch => {
  axios.get(`/api/accounts/entries`)
    .then(res => dispatch({ type: FETCH_ACCOUNT_ENTRIES, entries: res.data }))
    .catch(err => console.error(err))
}

export const post_entry = (account_id, entry_to_post) => dispatch => {
  axios.post(`/api/accounts/entries/${account_id}`, entry_to_post)
    .then(() => dispatch(fetch_all_entries()))
    .catch(err => console.error(err))
}



// export const fetch_account_entries = (account_id) => dispatch => {
//   axios.get(`/api/accounts/entries/${account_id}`)
//     .then(res => dispatch({ type: FETCH_ACCOUNT_ENTRIES, entries: res.data }))
//     .catch(err => console.error(err))
// }