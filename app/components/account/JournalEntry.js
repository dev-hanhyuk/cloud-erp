import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_all_entries, post_entry } from '_actions/account'
import _ from 'lodash'

import EntryTable from './EntryTable'

const styles={}

class JournalEntry extends Component {
    constructor(props) {
      super(props)
      this.state = {queried_entries: null, entry_to_post: { posted: 1 } }
    }

    componentWillMount() {
      this.props.fetch_all_entries()
    }

    queryEntryByAcctId = (acct_id) => this.setState({ acct_id })
    changeProp = (prop, val) => this.setState({ entry_to_post: { ...this.state.entry_to_post, [prop]: val }})


    postEntry = (e) => {
      e.preventDefault()
      const queried_entries = _.filter(this.props.entries, e => e.account_id.startsWith(this.state.acct_id) );
      if (_.uniqBy(queried_entries, 'account_id').length == 1) this.props.post_entry(queried_entries[0].account_id, this.state.entry_to_post);
      else return
    }

    mapEntries = () => {
      const queried_entries = _.filter(this.props.entries, e => e.account_id.startsWith(this.state.acct_id))
      if (queried_entries.length > 0) return queried_entries
      return this.props.entries
    }


    render () {
      return (
        <section>
          <h3>Journal Entry</h3>

          <input type="text" placeholder="account_id" onChange={e => this.queryEntryByAcctId(e.target.value)} />
          <input type="text" placeholder="debit" onChange={e => this.changeProp('debit', +e.target.value)} />
          <input type="text" placeholder="credit" onChange={e => this.changeProp('credit', +e.target.value)} />
          <input type="text" placeholder="description" onChange={e => this.changeProp('description', e.target.value)} />
          <button onClick={this.postEntry}>POST</button>

          <EntryTable entries={this.mapEntries()} />

        </section>
      )
    }
}

const mapStateToProps = ({ entries }) => ({ entries })
export default connect(mapStateToProps, { fetch_all_entries, post_entry }) (JournalEntry)