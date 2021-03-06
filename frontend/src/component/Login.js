import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form_container'>
      <h1>Login Here!</h1>
      <form>
        <input type='email' placeholder='Enter email address' />
        <input type='password' placeholder='Enter your password ' />
        <button type='submit'>Login</button>
      </form>

      <div className='form_message'>
        <span>OR</span>
        <p>
          Create an account <Link to='/'>Signup</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
