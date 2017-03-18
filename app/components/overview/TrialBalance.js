import React, { Component } from 'react'
import _ from 'lodash'

const styles={}

const TrialBalance = ({ tb }) => {
  let net_balance = 0;

  const render_amount = (t) => {
    const debit_amount = t.entries.map(e => e.debit).reduce((p, c) => p+c, 0);
    const credit_amount = t.entries.map(e => e.credit).reduce((p, c) => p+c, 0);
    const trial_balance = debit_amount - credit_amount;
    net_balance += trial_balance;
    if (Math.abs(trial_balance) >= 1) return trial_balance
  }
  return (
    <section>
      <h3>Trial Balance</h3>
      <table>
        <thead>
          <tr>
            <td>account_id</td>
            <td>name</td>
            <td>category</td>
            <td>subcategory</td>
            <td>amount</td>
          </tr>
        </thead>
        <tbody>
        { tb.map(t =>
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.category}</td>
            <td>{t.subcategory}</td>
            <td>{render_amount(t)}</td>
          </tr>
        )

        }
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Trial_Balance: </td>
            <td>{net_balance}</td>
          </tr>
        </tfoot>
      </table>

    </section>
  )
}


export default TrialBalance