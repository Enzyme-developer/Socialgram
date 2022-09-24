import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const initialState = {
    username : '',
    password : ''
  }
  
  const [formData, setFormData] = useState(initialState)
  const { username, password } = formData


  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }) )
  }

  
  const submit = (e: any) => {
    e.preventDefault()

  }
  
  return (
    <form onSubmit={submit}>
        <input type='text' placeholder='first name' name='username' value={username} onChange={onChange} />
        <input type='password' placeholder='password' name='password' value={password} onChange={onChange} />
        <button type='submit'>Sign up</button>
        <Link to='/login'>Don't have an account? Register</Link>
    </form>
  )
}

export default Register