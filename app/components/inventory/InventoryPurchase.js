import React, { Component } from 'react'
import { connect } from 'react-redux'
import { purchase_inventory, sale_inventory } from '_actions/inventory'

const styles={}

class InventoryPurchase extends Component {
  constructor(props) {
    super(props)
    this.state = {product_id: null, quantity: 0, unit_price: 0, description: '' }
  }

  changeProp = (prop, val) => this.setState({ [prop]: val })

  purchaseInventory = (e) => {
    e.preventDefault()
    const { product_id, quantity, unit_price, description } = this.state
    this.props.purchase_inventory(product_id, { quantity, unit_price, description, remainder: quantity })
  }

  saleInventory = (e) => {
    e.preventDefault()
    const { product_id, quantity, unit_price, description } = this.state
    this.props.sale_inventory(product_id, { quantity: -quantity })
  }

  render () {
    return (
      <section>
        <h3>Inventory Purchase / Sale</h3>
        <input type="number" placeholder="product_id" onChange={e => this.changeProp('product_id', +e.target.value)} />
        <input type="number" placeholder="quantity" onChange={e => this.changeProp('quantity', +e.target.value)} />
        <input type="number" placeholder="unit_price" onChange={e => this.changeProp('unit_price', +e.target.value)} />
        <input type="text" placeholder="description" onChange={e => this.changeProp('description', e.target.value)} />

        <button onClick={this.purchaseInventory}>Purchase</button>
        <button onClick={this.saleInventory}>Sale</button>

      </section>
    )
  }
}

// const mapStateToProps = ({ inventory }) => ({ inventory })
export default connect(null, { purchase_inventory, sale_inventory }) (InventoryPurchase);
