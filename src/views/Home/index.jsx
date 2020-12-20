import React from 'react';
import { Styled } from './styles';
import Carousel from '../../components/Carousel';
import Section from '../../components/Section';
import {homeSections} from '../../assets/json/homeSections';
function Home() {
  return (
      <Styled.HomeContainer>
        <Carousel/>
        <Styled.HomeSections>
        {homeSections.map((element, index)=>(        
            <Section section={element} key={index}/>
        ))}
        </Styled.HomeSections>
      </Styled.HomeContainer>
  );
}

export default Home;