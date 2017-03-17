import React from 'react'
import { Link } from 'react-router'

const styles={}

export default ({ children }) => (
  <section>
    <h1>SALES MODULE</h1>
    <nav>
      <Link to="/sales/history">Sales History</Link>
      <Link to="/sales/order">Sales Order</Link>
      <Link to="/sales/invoice">Invoice List</Link>
    </nav>

    {children}

  </section>
)
