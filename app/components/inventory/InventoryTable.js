import React from 'react'
import { connect } from 'react-redux'
import { pay_account_payable } from '_actions/inventory'

const styles={}

const InventoryTable = ({ inventories, pay_account_payable }) => {
  const total_inventories_amount = inventories.map(i => i.quantity * i.unit_price).reduce((p, c) => p + c, 0)
  const total_remainder_amount = inventories.map(i => i.remainder * i.unit_price).reduce((p, c) => p + c, 0)
  const total_number_remainder_inventories = inventories.map(i => i.remainder).reduce((p, c) => p + c, 0)

  return (
  <section>
    TODO
    <ul>
      <li>filtering: remainder inventories</li>
      <li>filtering: product</li>
      <li>sorting: quantity, unit_price</li>
    </ul>

    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Acquisition Cost</td>
          <td>Remainder Cost</td>
          <td>Description</td>
          <td>Product</td>
          <td>Business</td>
          <td>Inspector</td>
        </tr>
      </thead>
      <tbody>
        { inventories.map(i => (
          <tr key={i.id}>
            <td>{i.created_at.slice(0, 10)}</td>
            <td>{i.quantity}</td>
            <td>{i.unit_price.toFixed(2)}</td>
            <td>{i.quantity > 0 ? (i.quantity * i.unit_price).toFixed(2) : ''}</td>
            <td>{i.remainder >= 1 ? (i.remainder * i.unit_price).toFixed(2) : ''}</td>
            <td>{i.description}</td>
            <td>{i.product_id}</td>
            <td>{i.business_id}</td>
            <td>{i.inspector_id}</td>
            { i.quantity > 0 ? <td><button onClick={pay_account_payable(i.id, i.quantity * i.unit_price)}>Pay</button></td> : ''}

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
          <td>total remainder cost: </td>
          <td>{total_remainder_amount}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>total number of remainder inventories: </td>
          <td>{total_number_remainder_inventories}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>average unit price:</td>
          <td>{(total_remainder_amount / total_number_remainder_inventories).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </section>
)
}

export default connect(null, { pay_account_payable }) (InventoryTable);