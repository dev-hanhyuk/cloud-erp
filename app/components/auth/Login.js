import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '_actions/auth'

const styles={}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  changeProp = (prop, val) => this.setState({ [prop]: val })
  authenticate = (e) => {
    e.preventDefault()
    this.props.authenticate(this.state)
  }

  render () {
    return (
      <section>
        <input type="text" placeholder="email" onChange={e => this.changeProp('email', e.target.value)} />
        <input type="password" placeholder="password" onChange={e => this.changeProp('password', e.target.value)} />
        <button onClick={this.authenticate}>Login</button>
      </section>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { authenticate }) (Login)