import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '_components/App'
import Account from '_components/account'
import Account_List from '_components/account/AccountList'
import Account_JournalEntry from '_components/account/JournalEntry'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/account" />
      <Route path="/account" component={Account}>
        <Route path="/account/list" component={Account_List} />
        <Route path="/account/journal_entry" component={Account_JournalEntry} />
      </Route>
    </Route>
  </Router>
)
