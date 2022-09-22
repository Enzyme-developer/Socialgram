import React from 'react'
import styled from 'styled-components';
import Post from '../components/post/Post';
import Profile from '../components/profile/Profile';
import Trend from '../components/trends/Trend';

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 19rem auto 21rem;
  background: #e3e3e3;
`;


const Home = () => {
  return (
    <Wrapper>
      <Profile />
      <Post />
      <Trend />
    </Wrapper>
  )
}

export default Home