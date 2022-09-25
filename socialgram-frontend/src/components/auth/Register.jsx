import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate }  from 'react-router-dom'
import { Link } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'


const Register = () => {
  const initialState = {
    username : '',
    firstname : '',
    lastname : '',
    password : '',
    confirmPassword: ''
  }

  
  const [formData, setFormData] = useState(initialState)
  const { username, firstname, lastname, password, confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


  useEffect(() => {
    if(isError) {
      alert(message)
    }
    if (isSuccess) {
      navigate('/login')
      alert('Im am in')
    }
    dispatch(reset)

  }, [user, isError, isSuccess, message, navigate, dispatch])
  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }) )
  }


  const submit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      const userData = { username, firstname, password, lastname }
      dispatch(register(userData))
    } else {
      alert('passwords do not match')
    }
  }
  
  
  return (
    <form onSubmit={submit}>
        <input type='text' placeholder='first name' name='username' value={username} onChange={onChange} />
        <input type='text' placeholder='first name' name='firstname' value={firstname} onChange={onChange}/>
        <input type='text' placeholder='first name' name='lastname' value={lastname} onChange={onChange} />
        <input type='password' placeholder='password' name='password' value={password.toString()} onChange={onChange} />
        <input type='password' placeholder='confirm password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
        <button type='submit'>Sign up</button>
        <Link to='/login'>Already have an account? log in</Link>
    </form>
  )
}

export default Register