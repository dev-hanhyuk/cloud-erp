import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_accounts } from '_actions/account'
import _ from 'lodash'

import EntryTable from './EntryTable'

const styles={}

class SearchAccount extends Component {
    constructor(props) {
      super(props)
      this.state = {query: '', acct_id: ''}
    }

    componentWillMount() {
      this.props.fetch_accounts()
    }

    changeQuery = (prop, val) => this.setState({ [prop]: val })

    renderAccountList = () => {
      if (this.props.accounts.length > 0) {
        const { accounts } = this.props;
        const { query } = this.state;
        const id = _.filter(accounts, (acct) => acct.id.startsWith(query));
        const name = _.filter(accounts, (acct) => acct.name.toLowerCase().startsWith(query.toLowerCase()));
        const desc = _.filter(accounts, (acct) => acct.description.toLowerCase().startsWith(query.toLowerCase()));
        const category = _.filter(accounts, (acct) => acct.category.toLowerCase().startsWith(query.toLowerCase()));
        const subcategory = _.filter(accounts, (acct) => acct.subcategory.toLowerCase().startsWith(query.toLowerCase()));
        const queriedList = _.unionWith(id, name, desc, category, subcategory, _.isEqual)

        return queriedList.map(acct => (
          <tr key={acct.id}>
            <td>{acct.id}</td>
            <td>{acct.name}</td>
            <td>{acct.category}</td>
            <td>{acct.subcategory}</td>
            <td>{acct.description}</td>
          </tr>))
      }
    }

    render () {

      return (
        <section>
          <h3>Account List</h3>
          <input type="text" placeholder="id, name, category, etc." onChange={e => this.changeQuery('query', e.target.value)}/>

          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>category</td>
                <td>subcategory</td>
                <td>description</td>
              </tr>
            </thead>
            <tbody>
              { this.renderAccountList() }
            </tbody>
          </table>

        </section>
      )
    }
}

const mapStateToProps = ({ accounts }) => ({ accounts })
export default connect(mapStateToProps, { fetch_accounts }) (SearchAccount)