import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '_components/App'
import Purchase from '_components/purchase'
import Treasury from '_components/treasury'
import Inventory from '_components/Inventory'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/purchase" />
      <Route path="/purchase" component={Purchase} />
      <Route path="/treasury" component={Treasury} />
      <Route path="/inventory" component={Inventory} />
    </Route>
  </Router>
)