import React from 'react'
import { connect } from 'react-redux'
import { collect_account_receivable } from '_actions/sales'

const styles={}

const SalesTable = ({ sales, collect_account_receivable }) => {
  const total_sales = sales.map(s => s.quantity * s.unit_price).reduce((p, c) => p + c, 0)
  const total_sales_discount = -sales.map(s => s.discount).reduce((p, c) => p + c, 0)
  const net_sales = total_sales + total_sales_discount;

  return (
  <section>
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Status</td>
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Discount</td>
          <td>Subtotal</td>
          <td>Warranty Exp</td>
          <td>Product</td>
          <td>Invoice</td>
          <td>Seller</td>
        </tr>
      </thead>
      <tbody>
        { sales.map(s => (
          <tr key={s.id}>
            <td>{s.updated_at}</td>
            <td>{s.status}</td>
            <td>{s.quantity}</td>
            <td>{s.unit_price}</td>
            <td>{s.discount}</td>
            <td>{s.quantity * s.unit_price - s.discount}</td>
            <td>{s.warranty_expiration}</td>
            <td>{s.product_id}</td>
            <td>{s.invoice_id}</td>
            <td>{s.sold_id}</td>
            <td><button onClick={e => {
              e.preventDefault();
              collect_account_receivable(s.id, s.quantity * s.unit_price - s.discount)
            }}>Collected</button></td>
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
          <td></td>
          <td>total sales:</td>
          <td>{total_sales}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>total discount:</td>
          <td>{total_sales_discount}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Net Sales:</td>
          <td>{net_sales}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </section>
)
}

export default connect(null, { collect_account_receivable })(SalesTable)