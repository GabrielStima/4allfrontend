import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';

function SectionItem({item}) {
  return (
      <Styled.SectionItemContainer className="container">
        <Link to={`/ProductDetail/${item.id}`}>
            <Styled.SectionItemImg img={item.image}/>
            <Styled.SectionItemInfoContainer>
                <Styled.SectionItemTitle>{item.title}</Styled.SectionItemTitle>
                <Styled.SectionItemPriceContainer>
                    {
                        item.oldPrice && (
                            <Styled.SectionItemOldPrice>De R$ {item.oldPrice}</Styled.SectionItemOldPrice>
                        )
                    }
                    <Styled.SectionItemPrice>Por R$ {item.price}</Styled.SectionItemPrice>
                </Styled.SectionItemPriceContainer>
            </Styled.SectionItemInfoContainer>
        </Link>
      </Styled.SectionItemContainer>
  );
}

export default SectionItem;