import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const User = ({ user }) => {
  return (
    <StyledLink to={`/users/${user.id}`}>
      <div>
        <ImageWrapper>
          <Image src={user.image} alt={user.firstName}  />
        </ImageWrapper>
        <div>
          <Heading>FullName: {user.firstName} {user.lastName}</Heading>
          <SunHeading>Position: <span>{user?.company.title}</span></SunHeading>
         
        </div>
      </div>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
   border: 1px solid #fff;
   margin: 6px 0px;
   border-radius: 5px;
   padding: 16px;
`

const Heading = styled.h4`
  text-align: center;
  margin: 6px 0px;
  font-size: 10px;
  color: #444;
`
const SunHeading = styled.h5`
  text-align: center;
  font-size: 8px;
  color: #444;
`
const ImageWrapper = styled.h5`
  text-align: center;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  text-align: center;
  @media only  screen and (max-width: 568px) {
    width: 100px;
    height: 100px;
  }
`

export default User