import React from 'react';
import {Styled} from './styles';
import SectionItem from '../SectionItem';
import { FiArrowRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';
function Section({section}) {
  return (
    <Styled.Section>
      <Styled.SectionTitleContainer>
        <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
        <Styled.SectionGoSection>
          <Link to={section.url}>
            Ver mais <FiArrowRight size=".6em" style={{marginLeft: '.5rem'}}/>
          </Link>
        </Styled.SectionGoSection>
      </Styled.SectionTitleContainer>
        <Styled.SectionDivider/>
        <Styled.SectionItems>
          {
            section.items.map((element, index)=>(
              <SectionItem key={index} item={element}/>
            ))
          }
        </Styled.SectionItems>
    </Styled.Section>
  );
}

export default Section;