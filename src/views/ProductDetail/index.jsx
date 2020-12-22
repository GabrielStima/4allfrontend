import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../redux'

import { Styled } from './styles';
import Section from '../../components/Section';
import ModalComponent from '../../components/Modal';
import { useLocation } from 'react-router-dom';

function ProductDetail({props}) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const product = useSelector((state) => state.productDetail.product);
  const loading = useSelector((state) => state.productDetail.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProductById(props.match.params.id));
  },[dispatch, props]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleModal = () => {
    setOpen(!open);
  }

  return (
      <Styled.ProductDetailContainer>
        <ModalComponent isOpen={open} toggleModal={toggleModal}/>
        <hr/>
        <Styled.ProductDetailGrid>
          <Styled.ProductDetailImage image={product.item.image}/>
          <Styled.ProductDetailInfo>
          <h1>{product.item.title}</h1>
            <Styled.ProductDetailDescription>{product.item.description}</Styled.ProductDetailDescription>
            <Styled.ProductDetailSizes>
              {product.item.size.map((element, index) => <Styled.ProductDetailSizeItems key={index}>{element}</Styled.ProductDetailSizeItems>)}
            </Styled.ProductDetailSizes>
            <Styled.ProductDetailOldPrice>
              {!!product.item.oldPrice && `R$ ${product.item.oldPrice}`}
            </Styled.ProductDetailOldPrice>
            <Styled.ProductDetailPrice>R$ {product.item.price}</Styled.ProductDetailPrice>
            <Styled.ProductDetailButtonContainer>
              <Styled.ProductDetailButton onClick={toggleModal}>Adicionar na sacola</Styled.ProductDetailButton>
            </Styled.ProductDetailButtonContainer>
          </Styled.ProductDetailInfo>
          <Styled.ProductDetailRelatedItems>
            {
              !!product.relatedProducts.items && 
                  <Section section={product.relatedProducts} />
            }
          </Styled.ProductDetailRelatedItems>
        </Styled.ProductDetailGrid>
      </Styled.ProductDetailContainer>
    );

}

export default ProductDetail;