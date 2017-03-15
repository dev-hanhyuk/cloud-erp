import React, { Component } from 'react'
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

          <AccountList />

        </section>
      )
    }
}
