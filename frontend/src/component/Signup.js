import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='form_container'>
      <h1>Sign Up Here!</h1>
      <form>
        <input type='text' placeholder='Enter name' />
        <input type='email' placeholder='Enter email address' />
        <input type='password' placeholder='Enter your password ' />
        <input type='password' placeholder='Enter confirm password' />
        <button type='submit'>Create an account</button>
      </form>

      <div className='form_message'>
        <span>OR</span>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
