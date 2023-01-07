import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const User = ({user}) => {
  return (
    <StyledLink to={`/users/${user.id}`}>
      <div>
        <img src={user.image} alt={user.firstName} width={200} height={200} />
        <div>
          <Heading>{user.firstName} {user.lastName}</Heading>
        </div>
      </div>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`

const Heading = styled.h4`
  text-align: center;
  margin: 16px 0px;
`

export default User