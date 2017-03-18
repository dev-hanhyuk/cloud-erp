import React from 'react'
import { Link } from 'react-router'

const styles={}

export default ({ children }) => (
  <section>
    <h1>OVERVIEW MODULE</h1>
    <nav>
      <Link to="/overview/financial_analysis">Financial Analysis</Link>
      <Link to="/overview/financial_statements">Financial Statements</Link>
    </nav>

    {children}

  </section>
)
