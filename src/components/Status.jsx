import React from 'react'
import styled from 'styled-components';
import { Main } from '../pages/Home';

const Status = ({text}) => {
  return (
    <Main>
      <Container>
          <Text title="loading">{text}</Text>
      </Container>
    </Main>
   
  )
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media only  screen and (max-width: 568px) {
   width: 90%;
  }
`
const Text = styled.h4`
  color: ${props  => props.title === "loading" ? "palevioletred" : ""};
`


export default Status