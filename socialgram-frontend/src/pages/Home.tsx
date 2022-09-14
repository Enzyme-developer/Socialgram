import React from 'react'
import styled from 'styled-components';
import Profile from '../components/profile-section/Profile';

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 18rem auto 22rem;
  gap: 1rem;
  font-size: 1.5em;
  color: palevioletred;
`;


const Home = () => {
  return (
    <Wrapper>
      <div><Profile /></div>
      <div>post</div>
      <div>trends</div>
    </Wrapper>
  )
}

export default Home