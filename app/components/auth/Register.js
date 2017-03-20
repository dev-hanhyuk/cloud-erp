import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '_actions/auth'

const styles={}

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { firstname: '', lastname: '', email: '', password: '', mobile: '' }
  }

  changeProp = (prop, val) => this.setState({ [prop]: val })
  register = (e) => {
    e.preventDefault()
    this.props.register(this.state)
  }

  render () {
    return (
      <section>
        <input type='text' placeholder='firstname' onChange={e => this.changeProp('firstname', e.target.value)} />
        <input type='text' placeholder='lastname' onChange={e => this.changeProp('lastname', e.target.value)} />
        <input type='text' placeholder='email' onChange={e => this.changeProp('email', e.target.value)} />
        <input type='password' placeholder='password' onChange={e => this.changeProp('password', e.target.value)} />
        <input type='text' placeholder='mobile' onChange={e => this.changeProp('mobile', e.target.value)} />

        <button onClick={this.register}>Register</button>
      </section>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { register }) (Register)