import React,{ useState, useEffect } from 'react';
import { getProductById, getRelatedProducts } from '../../services/productDetailService';
import { Styled } from './styles';
import Section from '../../components/Section';
import ModalComponent from '../../components/Modal';
import { useLocation } from 'react-router-dom';

function ProductDetail({props}) {
  const { pathname } = useLocation();
  const [item, setItem] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  useEffect(()=>{
    setItem(getProductById(props.match.params.id));
  },[props])

  useEffect(()=>{
    setRelatedProducts(getRelatedProducts(item?.idCategory));
  },[item]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <Styled.ProductDetailContainer>
        <ModalComponent isOpen={open} toggleModal={toggleModal}/>
        <hr/>
        <Styled.ProductDetailGrid>
          <Styled.ProductDetailImage image={item.image}/>
          <Styled.ProductDetailInfo>
          <h1>{item.title}</h1>
            <Styled.ProductDetailDescription>{item.description}</Styled.ProductDetailDescription>
            <Styled.ProductDetailSizes>
              {
                !!item.size && item.size.map((element, index) => <Styled.ProductDetailSizeItems key={index}>{element}</Styled.ProductDetailSizeItems>)
              }
            </Styled.ProductDetailSizes>
            <Styled.ProductDetailOldPrice>
              {
                !!item.oldPrice && `R$ ${item.oldPrice}`
              }
            </Styled.ProductDetailOldPrice>
            <Styled.ProductDetailPrice>R$ {item.price}</Styled.ProductDetailPrice>
            <Styled.ProductDetailButtonContainer>
              <Styled.ProductDetailButton onClick={toggleModal}>Adicionar na sacola</Styled.ProductDetailButton>
            </Styled.ProductDetailButtonContainer>
          </Styled.ProductDetailInfo>
          <Styled.ProductDetailRelatedItems>
            {relatedProducts.map((element, index)=>(        
              <Section section={element} key={index}/>
            ))}
          </Styled.ProductDetailRelatedItems>
        </Styled.ProductDetailGrid>
      </Styled.ProductDetailContainer>
    );

}

export default ProductDetail;