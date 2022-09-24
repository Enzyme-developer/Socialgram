import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const initialState = {
    username : '',
    firstname : '',
    lastname : '',
    password : '',
    confirmPassword : ''
  }
  
  const [formData, setFormData] = useState(initialState)
  const { username, firstname, lastname, password, confirmPassword } = formData


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
        <input type='text' placeholder='first name' name='firstname' value={firstname} onChange={onChange}/>
        <input type='text' placeholder='first name' name='lastname' value={lastname} onChange={onChange} />
        <input type='password' placeholder='password' name='password' value={password} onChange={onChange} />
        <input type='password' placeholder='confirm password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
        <button type='submit'>Sign up</button>
        <Link to='/login'>Already have an account? log in</Link>
    </form>
  )
}

export default Register