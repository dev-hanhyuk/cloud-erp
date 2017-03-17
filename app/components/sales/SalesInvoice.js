import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_invoices } from '_actions/invoice'
const styles={}

class SalesInvoice extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetch_invoices()
  }

  render () {

    return (
      <section>
        <h3>Invoice List</h3>

      </section>
    )
  }
}

const mapStateToProps = ({ invoices }) => ({ invoices })
export default connect(mapStateToProps, { fetch_invoices}) (SalesInvoice)