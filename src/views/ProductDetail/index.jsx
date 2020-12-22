import React,{ useState, useEffect } from 'react';
import {productDetailService} from '../../services/productDetailService';
import { Styled } from './styles';

function ProductDetail({props}) {
  const [item, setItem] = useState();

  useEffect(()=>{
    setItem(productDetailService(props.match.params.id))
  },[])

  return (
      <Styled.ProductDetailContainer>
        <h1>{item?.title}</h1>
        <hr/>
        <Styled.ProductDetailGrid>
          <Styled.ProductDetailImage/>
          <Styled.ProductDetailRelatedItems/>
          <Styled.ProductDetailInfo/>
        </Styled.ProductDetailGrid>
      </Styled.ProductDetailContainer>
    );

}

export default ProductDetail;