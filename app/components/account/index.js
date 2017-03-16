import React, { Component } from 'react'
import { Link } from 'react-router'
import AccountList from './AccountList'

const styles={}

export default class  extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount () {}

    render () {

      return (
        <section>
          <h1>ACCOUNT MODULE</h1>
          <nav>
            <Link to="/account/list">Account List</Link>
            <Link to="/account/journal_entry">Journal Entries</Link>
          </nav>

          {this.props.children}

        </section>
      )
    }
}


//<AccountList />