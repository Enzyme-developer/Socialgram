import React, { useEffect } from 'react'
import styled from 'styled-components';
import { HiPhotograph } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom';


const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;

`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  background-color: blue;

`;

const Nav = () => {

  const dispatch: any = useDispatch()


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    // navigate('/')
  }
  
    return (
        <NavWrapper>
            <div style={{color: 'blue'}}><h2>Socialgram</h2></div>
            <button onClick={onLogout}>Logout</button>
            <Navbar>
                <HiPhotograph style={{fontSize: '20px', color: 'green', margin: '0 2rem'}} />
                <HiPhotograph style={{fontSize: '20px', color: 'green', margin: '0 2rem'}} />
                <HiPhotograph style={{fontSize: '20px', color: 'green', margin: '0 2rem'}} />
                <HiPhotograph style={{fontSize: '20px', color: 'green', margin: '0 2rem'}} />
            </Navbar>
        </NavWrapper>
    
  )
}

export default Nav