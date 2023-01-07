import React, { useContext } from 'react'
import styled from 'styled-components';
import User from '../components/usersComponents/User';
import UserContext from '../context/UserContext';

const Home = () => {
  const context = useContext(UserContext)
  const { users, error, status } = context
  if (status === "loadibg") {
    return <Container>
        <Loading>Loading</Loading>
    </Container>
  }
  return (
    <Main>
      <Container>
        <Grid>
          {
            users ? users.map(user => (
             <User key={user.id} user={user}/>
            )) : <h2>{error}</h2>
            }
        </Grid>
      </Container>
    </Main>
  )
}

const Main = styled.main`
  background-color: #ccc;
 
  padding-top: 60px;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
`

const Loading = styled.span`
  color: cyan;
`



export default Home