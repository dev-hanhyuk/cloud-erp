import React, { Component } from 'react'
import { connect } from 'react-redux'
import { request_PO } from '_actions/po'

const styles={}

class PO extends Component {
  constructor(props) {
    super(props)
    this.state = { quantity: 0, unit_price: 0 }
  }

  changeProp = (prop, val) => this.setState({ [prop]: val })
  submit = (e) => {
    e.preventDefault()
    this.props.request_PO(this.state)
  }

  render () {
    return (
      <section>
        <input type='number' placeholder='quantity' onChange={e => this.changeProp('quantity', e.target.value)} />
        <input type='number' placeholder='unit price' onChange={e => this.changeProp('unit_price', e.target.value)} />
        <button onClick={this.submit}>Purchase</button>
      </section>
    )
  }
}

const mapStateToProps = ({ pos }) => ({ pos })
export default connect(mapStateToProps, { request_PO }) (PO)