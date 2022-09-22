import React from 'react';
import './App.css';
import Login from './components/auth/Login';
import Nav from './components/navbar/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Profile />
      <Login />
    </div>
  );
}

export default App;
