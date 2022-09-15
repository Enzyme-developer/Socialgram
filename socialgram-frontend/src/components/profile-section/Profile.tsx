import React from 'react' 
import styled from 'styled-components';
import Followers from '../profile-components/followers-card/Followers';
import ProfileCard from '../profile-components/ProfileCard';
import Search from '../profile-components/Search';

const Main= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;


const Profile = () => {
  return (
    <Main>
        <div><h2>Socialgram</h2></div>
        <Search />
        <ProfileCard />
        <Followers />
    </Main>
  )
}

export default Profile