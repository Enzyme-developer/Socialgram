import axios from 'axios'

//Register user
const register = async (userData: any) => {
    const response  = await axios.post('http://localhost:5000/api/user/register', userData)
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}



// Login user
const login = async (userData: any) => {
    const response = await axios.post('http://localhost:5000/api/user/login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
  


// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

  
const authService = { register, logout, login}

export default authService