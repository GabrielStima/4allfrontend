import React from 'react';
import {Styled} from './styles';
import SectionItem from '../SectionItem';
function Section({section}) {
  return (
    <Styled.Section>
        <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
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