import React, {useEffect, useState} from 'react';
import { Styled } from './styles';
import {getListByCategory} from '../../services/listProducts';
import SectionItem from '../../components/SectionItem';
import Filter from '../../components/Filter';

function ListProducts({props}) {
  const [category, setCategory] = useState({});
  const [listProducts, setListProducts] = useState([]);

  useEffect(()=>{
    const result = getListByCategory(props.match.params.id);
    setCategory(result);
  }, [props]);

  useEffect(()=>{
    setListProducts(category.items)
  }, [category])

  return (
    <Styled.ListProductsContainer>
      <Styled.ListProductFilter>
        <Filter/>
      </Styled.ListProductFilter>
      <div>
        <div className="listProductGridInfoContainer">
          <Styled.ListProductGridTitle>{category.title}</Styled.ListProductGridTitle>
          <Styled.ListProductGridDivider/>
        </div>

        <Styled.ListProductGrid>
        {
          !!listProducts && listProducts.map((element, index) => (
            <SectionItem key={index} item={element}/>
          ))
        }
      </Styled.ListProductGrid>
      </div>
    </Styled.ListProductsContainer>
  );
}

export default ListProducts;