import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '_components/App'
import Auth from '_components/auth'
import Login from '_components/auth/Login'
import Register from '_components/auth/Register'
import Purchase from '_components/purchase'
import Treasury from '_components/treasury'
import Inventory from '_components/Inventory'


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/auth" />
      <Route path="/auth" component={Auth}>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
      </Route>
      <Route path="/purchase" component={Purchase} />
      <Route path="/treasury" component={Treasury} />
      <Route path="/inventory" component={Inventory} />
    </Route>
  </Router>
)