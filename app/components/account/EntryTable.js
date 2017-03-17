import React from 'react'

const styles={}



export default ({ entries }) => {
  const total_debit = entries.map(e => e.debit).reduce((prev, curr) => prev + curr, 0)
  const total_credit = entries.map(e => e.credit).reduce((prev, curr) => prev + curr, 0)
  const net_balance = total_debit - total_credit

  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>date</td>
            <td>account_id</td>
            <td>category</td>
            <td>subcategory</td>
            <td>name</td>
            <td>debit</td>
            <td>credit</td>
            <td>adjust_entry</td>
            <td>posted</td>
            <td>reference</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          { entries.map(e => (
          <tr key={e.id}>
            <td>{e.updated_at.slice(0, 10)}</td>
            <td>{e.account.id}</td>
            <td>{e.account.category}</td>
            <td>{e.account.subcategory}</td>
            <td>{e.account.name}</td>
            <td>{e.debit}</td>
            <td>{e.credit}</td>
            <td>{e.adjust_entry}</td>
            <td>{e.posted_id}</td>
            <td>{e.reference}</td>
            <td>{e.description}</td>
          </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Debit: </td>
            <td>{total_debit}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Credit: </td>
            <td>{total_credit}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Net_Balance: </td>
            <td>{net_balance}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>

    </section>
  )
}
