import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components';


const Searchdiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  height: 30px;
`;

const Input = styled.input`
  border: none;
  font-size: 14px;
  outline: none;
  background: transparent;
  padding: 5px;
  border-radius: 10px;
`;


const Search = () => {
  return (
    <Searchdiv>
      <BiSearch style={{ color: 'blue', fontSize: '25px', padding: '4px' }}/>
      <Input type='text' placeholder='search' value={''} />
    </Searchdiv>
  )
}

export default Search 