import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
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

  const navigate = useNavigate()
  const { user } = useSelector((state: any) => state.auth)

  
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
  

  return (
    <Wrapper>
      <Profile />
      <Post />
      <Trend />
    </Wrapper>
  )
}

export default Home