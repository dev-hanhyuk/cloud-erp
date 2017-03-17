import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_invoice } from '_actions/invoice'
import { register_sale } from '_actions/sales'
// import InvoiceTable from './InvoiceTable'

const styles={}

class SalesOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {invoice_id: null, product_id: null, sold_id: 1, status: "ordered", quantity: 0, unit_price: 0, discount: 0 }
  }

  changeProp = (prop, val) => this.setState({ [prop]: val })

  generateSale = (e) => {
    e.preventDefault()
    const { product_id, invoice_id, sold_id, status, quantity, unit_price, discount } = this.state;
    this.props.register_sale(product_id, {invoice_id, sold_id, status, quantity, unit_price, discount })
  }

  queryInvoice = (prop, val) => {
    this.setState({ [prop]: val });
    if (this.state.invoice_id) this.props.fetch_invoice(val)
  }


  render () {
    return (
      <section>
        <h3>Sales Order</h3>
        <input type="number" placeholder="product_id" onChange={e => this.changeProp('product_id', +e.target.value)} />
        <input type="number" placeholder="quantity" onChange={e => this.changeProp('quantity', +e.target.value)} />
        <input type="number" placeholder="unit_price" onChange={e => this.changeProp('unit_price', +e.target.value)} />
        <input type="number" placeholder="total_discount" onChange={e => this.changeProp('discount', +e.target.value)} />
        <select onChange={e => this.changeProp('status', e.target.value)} value={this.state.status}>
          <option value="ordered">ordered</option>
          <option value="shipped">shipped</option>
          <option value="delivered">delivered</option>
          <option value="canceled">canceled</option>
          <option value="returned">returned</option>
        </select>

        <button onClick={this.generateSale}>Sale</button>




      </section>
    )
  }
}

const mapStateToProps = ({ invoice }) => ({ invoice })
export default connect(mapStateToProps, { fetch_invoice, register_sale }) (SalesOrder);

//<InvoiceTable invoice={this.props.invoice} />