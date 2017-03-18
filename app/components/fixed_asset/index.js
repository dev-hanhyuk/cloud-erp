import React from 'react'
import { Link } from 'react-router'

const styles={}

export default ({ children }) => (
  <section>
    <h1>FIXED ASSET</h1>
    <nav>
      <Link to="/fixed_asset/list">Asset List</Link>
      <Link to="/fixed_asset/register">Asset Register</Link>
      <Link to="/fixed_asset/depreciation">Depreciation/Amortization</Link>
      <Link to="/fixed_asset/disposal">Asset Disposal</Link>
    </nav>

    {children}

  </section>
)
