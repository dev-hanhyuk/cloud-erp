import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_inventories } from '_actions/inventory'

import InventoryTable from './InventoryTable'


const styles={}

class InventoryHistory extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetch_inventories()
  }

  render () {

    return (
      <section>
        <h3>Inventory Movement</h3>

        <InventoryTable inventories={this.props.inventories || []} />
      </section>
    )
  }
}

const mapStateToProps = ({ inventories }) => ({ inventories })
export default connect(mapStateToProps, { fetch_inventories }) (InventoryHistory)
