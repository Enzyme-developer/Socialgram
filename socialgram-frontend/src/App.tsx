import React from 'react';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nav from './components/navbar/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
