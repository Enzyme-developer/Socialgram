import React from 'react'
import styled from 'styled-components';
import { HiPhotograph } from 'react-icons/hi'


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
    return (
        <NavWrapper>
            <div style={{color: 'blue'}}><h2>Socialgram</h2></div>
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