import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_all_POs } from '_actions/po'
import PO from './PO'

const styles={}

class Purchase extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.fetch_all_POs()
  }

  render () {
    return (
      <section>
        <h1>PURCHASE</h1>
        <PO />
      </section>
    )
  }
}

const mapStateToProps = ({ pos }) => ({ pos })
export default connect(mapStateToProps, { fetch_all_POs }) (Purchase)
