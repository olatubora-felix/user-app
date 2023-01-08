import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserInfo = ({ user }) => {
  console.log(user);
  const Navigate = useNavigate()
  return (
    <Section>
     
      <Container>
         <Button onClick={() => Navigate("/")}>Back</Button>
        <Wrapper>
          <Left>
            <Image src={user.image} alt="" />
            <Heading>Full Name: {user.firstName} {user.lastName}  </Heading>
            <Text>Email: {user.email} </Text>
            <Text>Phone: {user.phone} </Text>
            <Text>Gender: {user.gender}</Text>
            <Text>Age: {user.age}</Text>
          </Left>
          <Right>
            <Heading>Comapny: {user.company.name}</Heading>
            <Text>Department: {user.company.department}</Text>
            <Text>Position: {user.company.title}</Text>
            <Text>Graduated from: {user.university}</Text>
              <Text>Address: {user.address.address} </Text>
              <Text>State: {user.address.state}</Text>
            <Text>City: {user.address.city}</Text>
            <Text>State Postal Code: {user.address.postalCode}</Text>
            <Text>DOB: {user.birthDate}</Text>
          </Right>
      </Wrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background-color: #ccc;
  padding-top: 60px;
  height: 100vh;
   @media only  screen and (max-width: 568px) {
    padding-top: 10px;
  }
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media only  screen and (max-width: 568px) {
   width: 100%;
   padding: 10px;
  }
`
const Wrapper = styled.div`
  display: flex;
  @media only  screen and (max-width: 568px) {
   flex-direction: column;
  }
`
const Image = styled.img`
  border: 1px solid #f1f1f1;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  @media only  screen and (max-width: 568px) {
   height: 100%;
    width: 100%;
    
  }
`
const Left = styled.div`
 margin-right: 16px;
 @media only  screen and (max-width: 568px) {
   margin-right: 0px;
  }
 text-align: center;
`
const Right = styled.div`
  flex: 1;
  padding: 16px;
   @media only  screen and (max-width: 568px) {
    text-align: center;
  }
`
const Heading = styled.h4`
   font-size: 16px;
   color: palevioletred;
`
const Text = styled.h4`
 font-size: 10px;
 margin: 5px 0px;
`
const Button = styled.button`
 border: 0;
 padding: 5px 10px;
 background-color: palevioletred;
 color: #fff;
 border-radius: 5px;
 margin: 10px 0px;
 cursor: pointer;
`

export default UserInfo