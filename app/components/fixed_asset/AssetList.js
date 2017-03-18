import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_all_assets } from '_actions/asset'

import ListComponent from './ListComponent'

const styles={}

class AssetList extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount () {
      this.props.fetch_all_assets()
    }

    render () {

      return (
        <section>
          <h3>Asset List</h3>
          <ListComponent assets={this.props.assets || []} />
        </section>
      )
    }
}

const mapStateToProps = ({ assets }) => ({ assets })
export default connect(mapStateToProps, { fetch_all_assets }) (AssetList)