import React from 'react'
import styled from 'styled-components';

const UserInfo = ({ user }) => {
  console.log(user);
  return (
    <Section>
      <Container>
        <div>
          <img src={user.image} alt="" />
          <h4>Full Name: {user.firstName} {user.lastName}</h4>
          <h5>Age: {user.age}</h5>
          <h5>Gender: {user.gender}</h5>
        </div>
        </Container>
    </Section>
  )
}

const Section = styled.section`
  background-color: #ccc;
  padding-top: 60px;
  height: 100vh;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

export default UserInfo