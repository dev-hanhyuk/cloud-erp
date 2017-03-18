import React from 'react'
import { Link } from 'react-router'

const styles={}

export default ({ children }) => (
  <section>
    Menu
    <li><Link to="/overview">Analysis</Link></li>
    <li><Link to="/treasury">Treasury</Link></li>
    <li><Link to="/sales">Sales</Link></li>
    <li><Link to="/inventory">Inventory</Link></li>
    <li><Link to="/fixed_asset">Asset Management</Link></li>
    <li><Link to="/account">Accounting</Link></li>

    {children}
  </section>
)