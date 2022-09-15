import React from 'react'
import styled from 'styled-components';


interface FollowerProps {
    src: string;
    name: string;
    username: string;
}


const Followercard = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 6px;
  justify-content: space-between;
  align-items: center;
//   background-color: white;
`;


const Button = styled.button`
  display: flex;
  text-align: center;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  background: orangered;
  &:hover {
    color: orangered;
    border: 1px solid orangered;
    background: white;
  }
`;


const Follower = ({src, name, username}: FollowerProps) => {
  return (
    <Followercard>
        <div>
            <img alt='display' src={src} style={{width: '50px', height:'50px', borderRadius: '50%'}} />
        </div>
        <div>
            <p>{name}</p>
            <p>{username}</p>
        </div>
        <div>
            <Button>follow</Button>
        </div>
    </Followercard>
  )
}

export default Follower