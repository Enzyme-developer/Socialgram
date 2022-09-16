import React from 'react' 
import styled from 'styled-components';
import Followers from '../profile-components/followers-card/Followers';
import ProfileCard from '../profile-components/ProfileCard';
import Search from '../profile-components/Search';

const Main= styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: auto;
`;


const Profile = () => {
  return (
    <Main>
        <Search />
        <ProfileCard />
        <Followers />
    </Main>
  )
}

export default Profile