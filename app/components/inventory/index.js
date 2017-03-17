import React from 'react'
import { Link } from 'react-router'

const styles={}

export default ({ children }) => (
  <section>
    <h1>INVENTORY MODULE</h1>
    <nav>
      <Link to="/inventory/purchase">Inventory Purchase</Link>
      <Link to="/inventory/history">Inventory Movement History</Link>
    </nav>

    {children}

  </section>
)
