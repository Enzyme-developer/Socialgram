import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components';


const Searchdiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  border-radius: 10px;
  height: 30px;
`;

const Input = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  padding: 5px;
  border-radius: 10px;
`;


const Search = () => {
  return (
    <Searchdiv>
      <Input type='text' placeholder='search' value={''} />
      <div style={{ cursor: 'pointer', height: '30px', backgroundColor: 'orangered' }}><BiSearch style={{ color: 'white', fontSize: '25px', padding: '4px' }}/></div>
    </Searchdiv>
  )
}

export default Search 