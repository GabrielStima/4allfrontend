import React from 'react';
import { Styled } from './styles';

function SectionItem({item}) {
  return (
      <Styled.SectionItemContainer className="container">
        <Styled.SectionItemImg img={item.image}/>
        <Styled.SectionItemInfoContainer>
            <Styled.SectionItemTitle>{item.name}</Styled.SectionItemTitle>
            <Styled.SectionItemPriceContainer>
                {
                    item.oldPrice && (
                        <Styled.SectionItemOldPrice>De R$ {item.oldPrice}</Styled.SectionItemOldPrice>
                    )
                }
                <Styled.SectionItemPrice>Por R$ {item.price}</Styled.SectionItemPrice>
            </Styled.SectionItemPriceContainer>
        </Styled.SectionItemInfoContainer>
      </Styled.SectionItemContainer>
  );
}

export default SectionItem;