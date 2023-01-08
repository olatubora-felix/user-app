import React, { useContext } from 'react'
import styled from 'styled-components';
import SearchBar from '../components/searchComponents/SearchBar';
import Status from '../components/Status';
import User from '../components/usersComponents/User';
import UserContext from '../context/UserContext';

const Home = () => {
  const context = useContext(UserContext)
  const { users, error, status } = context
  let content;
  if (status === "loading") {
    return <Status text={"Loading..."}/>
  }

  if (status === "failed") {
    return content = 
        <Status text={error}/> 
  }
  return (
    <Main>
      <Container>
        <SearchBar />
        <Grid>
          {
            users.length > 0  ?  users.map(user => (
             <User key={user.id} user={user}/>
            )) 
              : <NotFound>No Result Found</NotFound>
            }
        </Grid>
      </Container>
    </Main>
  )
}

export const Main = styled.main`
  background-color: #ccc;
  padding-top: 60px;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media only  screen and (max-width: 568px) {
   width: 90%;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media only  screen and (max-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
`

const NotFound = styled.h2`
  color: #444;
  margin: 16px 0px;
  @media only  screen and (max-width: 568px) {
   font-size: 16px
  }
`



export default Home