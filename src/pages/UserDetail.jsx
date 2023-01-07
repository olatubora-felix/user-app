import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import styled from 'styled-components';
import UserInfo from '../components/UserInfo';

const UserDetail = () => {
  const { userId } = useParams()
  const context = useContext(UserContext)
  const { user, getUser, error, status } = context
  
  useEffect(() => {
      getUser(userId)
  }, [userId])

  let content
  
  switch (status) {
    case "loading":
      return content = <Container>
          <h4>Loading</h4>
      </Container>
    case "success": 
      return content = <UserInfo user={user}/>
    case "failed": 
      return content = <Container>
          <h4>{error}</h4>
      </Container>
  }
  return (
    <Main>
      {content}
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



export default UserDetail