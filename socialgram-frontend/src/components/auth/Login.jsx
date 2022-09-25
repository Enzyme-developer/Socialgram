import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'


const Register = () => {
  const initialState = {
    username : '',
    password : ''
  }
  
  const [formData, setFormData] = useState(initialState)
  const { username, password } = formData

  

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }) )
  }

  
  const submit = (e) => {
    e.preventDefault()
    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }
  
  return (
    <form onSubmit={submit}>
        <input type='text' placeholder='first name' name='username' value={username} onChange={onChange} />
        <input type='password' placeholder='password' name='password' value={password.toString()} onChange={onChange} />
        <button type='submit'>Sign up</button>
        <Link to='/login'>Don't have an account? Register</Link>
    </form>
  )
}

export default Register