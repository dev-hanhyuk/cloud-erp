import axios from 'axios'
import { FETCH_ACCOUNT, FETCH_ACCOUNTS } from '_actions'

export const fetch_accounts = () => dispatch => {
  axios.get('/api/accounts/')
    .then(res => dispatch({ type: FETCH_ACCOUNTS, accounts: res.data }))
    .catch(err => console.error(err))
}