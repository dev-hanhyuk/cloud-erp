import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_accounts, create_account } from '_actions/account'
import _ from 'lodash'

import { ACCT_CATEGORIES } from '_components/account/account_map'

import EntryTable from './EntryTable'

const styles={}

class SearchAccount extends Component {
    constructor(props) {
      super(props)
      this.state = {query: '', id: '', name: '', category: '', subcategory: '', description: ''}
    }

    componentWillMount() {
      this.props.fetch_accounts()
    }

    changeQuery = (prop, val) => this.setState({ [prop]: val })
    changeProp = (prop, val) => this.setState({ [prop]: val })

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

    renderCategories = () => {
      const categories = ACCT_CATEGORIES.map(c => c.category);
      return categories.map((c, idx) => <option key={idx} value={c}>{c}</option>)
    }

    renderSubcategories = () => {
      if (this.state.category) {
        const category = ACCT_CATEGORIES.filter(c => c.category == this.state.category)[0];
        return category['subcategory'].map((s, idx) => <option key={idx} value={s}>{s}</option>)
      }

    }

    createAccount = (e) => {
      e.preventDefault()
      const {id, name, category, subcategory, description} = this.state;
      this.props.create_account(id, {id, name, category, subcategory, description})
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
              <tr>
                <td><input type="text" placeholder="acct_id" onChange={e => this.changeProp('id', e.target.value)} /></td>
                <td><input type="text" placeholder="acct_name" onChange={e => this.changeProp('name', e.target.value)} /></td>
                <td>
                  <select onChange={e => this.changeProp('category', e.target.value)}>
                    {this.renderCategories()}
                  </select>
                </td>
                <td>
                  <select onChange={e => this.changeProp('subcategory', e.target.value)} value={this.state.subcategory}>
                    {this.renderSubcategories()}
                  </select>
                </td>
                <td><input type="text" placeholder="description" onChange={e => this.changeProp('description', e.target.value)} /></td>
                <td><button onClick={this.createAccount}>CREATE</button></td>
              </tr>
              { this.renderAccountList() }
            </tbody>
          </table>

        </section>
      )
    }
}

const mapStateToProps = ({ accounts }) => ({ accounts })
export default connect(mapStateToProps, { fetch_accounts, create_account }) (SearchAccount)