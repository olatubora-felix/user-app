import React, { useContext } from 'react'
import  styled  from 'styled-components';
import UserContext from '../../context/UserContext';

const SearchBar = () => {
  const context = useContext(UserContext)
  const { search, handleChange, handleResult } = context
  
  return (
    <Box onSubmit={handleResult}>
      <ControlINput value={search} onChange={handleChange}/>
      <Button type="submit">Search</Button>
    </Box>
  )
}

const Box = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
 border-radius: 10px;
`
const ControlINput = styled.input`
  flex: 1;
  border: none;
  outline: none;
   padding: 5px 10px;
    border-radius: 10px;
`
const Button = styled.button`
 background-color: #444;
 color: #fff;
 padding: 6px 12px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`

export default SearchBar