import React from 'react'
import styled from 'styled-components';
import HiPhoto, { HiPhotograph } from 'react-icons/hi'


const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const SharedWrapper = styled.div`
  display: flex;
  background: white;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 24px;
`



const Share = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

const Media= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`

const Input = styled.input`
  background-color: #e3e3e3;
  font-size: 1rem;
  padding: .6rem;
  margin-left: 1rem;
  border: none;
  outline: none;
  border-radius: 25px;
  width: 100%;
`


const Button = styled.button`
  display: flex;
  text-align: center;
  padding: 8px 16px;
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


const Post = () => {
  return (
    <PostWrapper>
      <SharedWrapper>
        <Share>
          <img alt='user-display' style={{width: '50px', height:'50px', borderRadius: '50%'}} src='https://e0.365dm.com/22/08/768x432/skysports-cristiano-ronaldo_5882500.jpg?20220831171447' />
          <Input type='text' placeholder="What's happening?" value={''} />
        </Share>

        <Media>
          <div style={{textAlign: 'center'}}>
            <HiPhotograph style={{fontSize: '20px', color: 'green'}} />
            <p>Photo</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <HiPhotograph style={{fontSize: '20px', color: 'blue'}} />
            <p>Video</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <HiPhotograph style={{fontSize: '20px', color: 'red'}} />
            <p>Location</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <HiPhotograph style={{fontSize: '20px', color: 'orange'}} />
            <p>Schedule</p>
          </div>
          <Button>Share</Button>
        </Media>
      </SharedWrapper>

      {/* <Sharedpost></Sharedpost> */}
    </PostWrapper>
  )
}

export default Post