import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_sales } from '_actions/sales'

import SalesTable from './SalesTable'


const styles={}

class SalesHistory extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetch_sales()
  }

  render () {

    return (
      <section>
        <h3>Sales History</h3>

        <SalesTable sales={this.props.sales || []} />
      </section>
    )
  }
}

const mapStateToProps = ({ sales }) => ({ sales })
export default connect(mapStateToProps, { fetch_sales }) (SalesHistory)