import React from 'react'

const styles={}

export default ({ accounts }) => {
  const net_balance = (entries) => entries.map(e => e.debit - e.credit).reduce((p, c) => p+c, 0);

  const current_asset_entries = _.flatten(accounts.filter(acct => acct.entries.length > 0 && acct.id > 11000 && acct.id < 12000).map(acct => acct.entries));
  const current_liability_entries = _.flatten(accounts.filter(acct => acct.entries.length > 0 && acct.id > 21000 && acct.id < 22000).map(acct => acct.entries));
  const quick_asset_entries = _.flatten(accounts.filter(acct => acct.entries.length > 0 && acct.id > 11000 && acct.id < 11300).map(acct => acct.entries));
  const cash_asset_entries = _.flatten(accounts.filter(acct => acct.entries.length > 0 && acct.id > 11000 && acct.id < 11200).map(acct => acct.entries));

  const current_asset_balance = net_balance(current_asset_entries);
  const quick_asset_balance = net_balance(quick_asset_entries);
  const cash_balance = net_balance(cash_asset_entries);
  const current_liability_balance = -net_balance(current_liability_entries)

  return (
    <section>
      <h3>Liquidity</h3>
      <ul>
        <li>Current Ratio: { current_liability_balance == 0 ? 'n/a' : (current_asset_balance / current_liability_balance).toFixed(3) }</li>
        <li>Quick Ratio: { current_liability_balance == 0 ? 'n/a' : (quick_asset_balance / current_liability_balance).toFixed(3) }</li>
        <li>Cash Ratio: { current_liability_balance == 0 ? 'n/a' : (cash_balance / current_liability_balance).toFixed(3) }</li>
        <li>Net Working Capital: </li>
      </ul>

      <h3>Asset Efficiency</h3>
      <ul>
        <li>Asset Turnover</li>
        <li>Inventory Turnover</li>
        <li>Average Collection Period</li>
        <li>Days Sales in Inventory</li>
      </ul>

      <h3>Financial Leverage</h3>
      <ul>
        <li>Long-Term Debt Ratio</li>
        <li>Long-Term Debt / Equity</li>
        <li>Total Debt Ratio</li>
        <li>Times Interest Earned</li>
        <li>Cash Coverage Ratio</li>
      </ul>

      <h3>Profitability Measurement</h3>
      <ul>
        <li>Net Profit Margin</li>
        <li>Operating Profit Margin</li>
        <li>Return on Assets</li>
        <li>Return on Equity</li>
      </ul>

      <h3>Market Valuation</h3>
      <ul>
        <li>Price to Earning</li>
        <li>Price to Book</li>
        <li>Price to Operating Cash Flow</li>
        <li>Price to Free Cash Flow</li>
        <li>Enterprise Value</li>
        <li>Enterprise Value to EBITDA</li>
      </ul>

    </section>
  )
}