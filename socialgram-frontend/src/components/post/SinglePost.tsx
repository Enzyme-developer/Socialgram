import React from 'react'
import styled from 'styled-components'
import { FcLike } from 'react-icons/fc'
import { FaRegPaperPlane } from 'react-icons/fa'
import { AiOutlineComment } from 'react-icons/ai'


const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  border-radius: 24px;
  background: white;
  align-items: flex-start;
`;


const SinglePost = () => {
  return (
    <Post>
        <img alt='post' src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/08/15/16605918006074.jpg' style={{ width: '100%', height: '350px', borderRadius: '24px 24px 0 0'}} />
        <div style={{padding: '1rem'}}>
            <FcLike style={{fontSize: '20px'}} />
            <AiOutlineComment style={{fontSize: '20px'}} />
            <FaRegPaperPlane style={{fontSize: '20px'}} />
        </div>
        <p style={{fontSize: '12px', padding: '1rem'}}>2300 likes</p>
        <p style={{padding: '1rem'}}><span style={{fontWeight: 'bold'}}>Tzuyi</span> happy New year friends</p>
    </Post>
  )
}

export default SinglePost