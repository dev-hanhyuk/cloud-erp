import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_all_accounts } from '_actions/account'

import TrialBalance from './TrialBalance'

const styles={}

class FinancialStatements extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount () {
      this.props.fetch_all_accounts()
    }

    render () {

      return (
        <section>
          <h3>Financial Statements</h3>
          <TrialBalance tb={this.props.accounts}/>
        </section>
      )
    }
}

const mapStateToProps = ({ accounts }) => ({ accounts })
export default connect(mapStateToProps, { fetch_all_accounts }) (FinancialStatements)