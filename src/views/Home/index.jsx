import React from 'react';
import { Styled } from './styles';
import Carousel from '../../components/Carousel';
function Home() {
  return (
      <Styled.HomeContainer>
        <Carousel/>
        <h1>Maluko</h1>
      </Styled.HomeContainer>
  );
}

export default Home;