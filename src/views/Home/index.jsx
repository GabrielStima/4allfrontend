import React, {useState, useEffect} from 'react';
import { Styled } from './styles';
import Carousel from '../../components/Carousel';
import Section from '../../components/Section';
import { getHomeSections } from '../../services/homeSections';

function Home() {
  const [homeSections, setHomeSections] = useState([]);
  
  useEffect(()=>{
    setHomeSections(getHomeSections());
  },[]);

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