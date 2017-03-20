import axios from 'axios'
import { AUTHENTICATE, REGISTER } from '_actions'

export const authenticate = (payload) => dispatch => {
  axios.post(`/api/auth/login`, payload)
    .then(res => dispatch({ type: AUTHENTICATE, auth: res.data }))
    .catch(err => console.error(err))
}

export const register = (payload) => dispatch => {
  axios.post(`/api/auth/register`, payload)
    .then(res => dispatch({ type: AUTHENTICATE, auth: res.data }))
    .catch(err => console.error(err))
}