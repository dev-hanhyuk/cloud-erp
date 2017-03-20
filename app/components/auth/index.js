import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


const styles={}

const Auth = ({ auth, children }) => {

  return (
    <section>
      <h1>AUTHENTICATE</h1>
      <nav>
        <li><Link to="/auth/login">Login</Link></li>
        <li><Link to="/auth/register">Register</Link></li>
      </nav>

      { children }
    </section>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps) (Auth)