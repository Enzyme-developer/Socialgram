import React from 'react'
import styled from 'styled-components';


const Profilecard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  border-radius: 24px;
  overflow-x: clip;-color: #f3f3f3;
  background
`;


const Profileimages= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Intro = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
`;

const Following = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

const Profile = styled.a`
  text-align: center;
  padding: 1rem;
  color: orangered;
`;


const ProfileCard = () => {
  return (
    <Profilecard>
        <Profileimages>
            <img alt='cover' style={{maxWidth: '100%', minWidth: '100%', height: '100px'}} src='https://wpcdn.us-east-1.vip.tn-cloud.net/www.koamnewsnow.com/content/uploads/2020/04/9d546a724b6a3fd59c469f0caf07918a-1024x576.jpg' />
            <img alt='display' style={{position: 'relative', top:'-20px', zIndex: '10', width: '70px', height: '70px', borderRadius: '50%' }}  src='data:image/jpeg;base64,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' />
        </Profileimages>
        <Intro>
            <h3>Paula Makiato</h3>
            <p>Senior full-stack developer</p>
        </Intro>
        <hr />
        <Following>
            <div style={{textAlign: 'center', marginTop: '0.5rem', borderRight: '1px solid black', padding: '0 1rem'}}>
            <h4>followers</h4>
            <p>25</p>
            </div>
            <div style={{textAlign: 'center', marginTop: '0.5rem', padding: '0 1rem'}}>
            <h4>following</h4>
            <p>5</p>
            </div>
        </Following>
        <hr />
        <Profile>My profile</Profile>
    </Profilecard>
  )
}

export default ProfileCard