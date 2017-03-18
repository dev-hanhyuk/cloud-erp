import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '_components/App'
import Account from '_components/account'
import Account_List from '_components/account/AccountList'
import Account_JournalEntry from '_components/account/JournalEntry'

import Sales from '_components/sales'
import Sales_History from '_components/sales/SalesHistory'
import Sales_Order from '_components/sales/SalesOrder'
import Sales_Invoice from '_components/sales/SalesInvoice'

import Inventory from '_components/inventory'
import Inventory_History from '_components/inventory/InventoryHistory'
import Inventory_Purchase from '_components/inventory/InventoryPurchase'

import Overview from '_components/overview'
import Overview_FinancialAnalysis from '_components/overview/FinancialAnalysis'
import Overview_FinancialStatements from '_components/overview/FinancialStatements'


import FixedAsset from '_components/fixed_asset'
import FixedAsset_List from '_components/fixed_asset/AssetList'
import FixedAsset_Depreciation from '_components/fixed_asset/AssetDepreciation'
import FixedAsset_Register from '_components/fixed_asset/AssetRegister'
import FixedAsset_Disposal from '_components/fixed_asset/AssetDisposal'


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/fixed_asset" />

      <Route path="/overview" component={Overview}>
        <Route path="/overview/financial_analysis" component={Overview_FinancialAnalysis} />
        <Route path="/overview/financial_statements" component={Overview_FinancialStatements} />
      </Route>

      <Route path="/fixed_asset" component={FixedAsset}>
        <Route path="/fixed_asset/list" component={FixedAsset_List} />
        <Route path="/fixed_asset/register" component={FixedAsset_Register} />
        <Route path="/fixed_asset/depreciation" component={FixedAsset_Depreciation} />
        <Route path="/fixed_asset/disposal" component={FixedAsset_Disposal} />
      </Route>

      <Route path="/account" component={Account}>
        <Route path="/account/list" component={Account_List} />
        <Route path="/account/journal_entry" component={Account_JournalEntry} />
      </Route>

      <Route path="/sales" component={Sales}>
        <Route path="/sales/history" component={Sales_History} />
        <Route path="/sales/order" component={Sales_Order} />
        <Route path="/sales/invoice" component={Sales_Invoice} />
      </Route>

      <Route path="/inventory" component={Inventory}>
        <Route path="/inventory/history" component={Inventory_History} />
        <Route path="/inventory/purchase" component={Inventory_Purchase} />
      </Route>

    </Route>
  </Router>
)
