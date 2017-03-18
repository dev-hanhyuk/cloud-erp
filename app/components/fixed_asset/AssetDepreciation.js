import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetch_all_accounts } from '_actions/account'

// import AnalysisComponent from './AnalysisComponent'

const styles={}

class AssetDepreciation extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount () {
      // this.props.fetch_all_accounts()
    }

    render () {

      return (
        <section>
          <h3>Asset Depreciation</h3>

        </section>
      )
    }
}

const mapStateToProps = ({ assets }) => ({ assets })
export default connect(mapStateToProps) (AssetDepreciation)