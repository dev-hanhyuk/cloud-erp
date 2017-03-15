import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '_components/App'
import Account from '_components/account'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/account" />
      <Route path="/account" component={Account} />
    </Route>
  </Router>
)
