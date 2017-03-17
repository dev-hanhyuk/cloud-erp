import React from 'react'

const styles={}

export default ({ invoice }) => (
  <section>
    <table>
      <thead>
        <tr>
          <td>date</td>
          <td>id</td>
          <td>payment</td>
          <td>billing</td>
          <td>shipping</td>
          <td>customer</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{invoice.created_at}</td>
          <td>{invoice.id}</td>
          <td>{invoice.payment_method}</td>
          <td>{invoice.billing_address}</td>
          <td>{invoice.shipping_address}</td>
          { invoice.business_id !== null ? <td>{invoice.business_id}</td> : <td>{invoice.customer_id}</td>}
        </tr>

      </tbody>
    </table>
  </section>
)
