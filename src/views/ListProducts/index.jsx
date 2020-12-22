import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchFilterProducts } from '../../redux'

import { Styled } from './styles';
import SectionItem from '../../components/SectionItem';
import Filter from '../../components/Filter';
import { Link, useLocation } from 'react-router-dom';

function ListProducts({props}) {
  const { pathname } = useLocation();
  const products = useSelector((state) => state.listProducts.products);
  const loading = useSelector((state) => state.listProducts.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts(props.match.params.id, props.match.params.page));
},[dispatch, props]);
  
  useEffect(()=>{
    if(!!products.filters){
      dispatch(fetchFilterProducts(products.filters, props.match.params.id, props.match.params.page));
    }else{
      dispatch(fetchProducts(props.match.params.id, props.match.params.page));
    }
  }, [props, dispatch, products.filters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleListFiltered = (filter) => {
    if(filter !== "0"){
      dispatch(fetchFilterProducts(filter, props.match.params.id, props.match.params.page));
    }else{
      dispatch(fetchProducts());
    }
    props.history.push(`/ListProducts/${props.match.params.id}/1`);
  }

  const pagination = () => {
    let numberOfPages = products.pages; 
    let arrayOfPages = [];

    for (let index = numberOfPages; index > 0; index--) {
      arrayOfPages.push(index);
    };

    return arrayOfPages.reverse();
  }

  return (
    <Styled.ListProductsContainer>
      <Styled.ListProductFilter>
        <Filter hasFilter={handleListFiltered}/>
      </Styled.ListProductFilter>
      <div>
        <div className="listProductGridInfoContainer">
          <Styled.ListProductGridTitle>{products.title}</Styled.ListProductGridTitle>
          <Styled.ListProductGridDivider/>
        </div>

        <Styled.ListProductGrid>
        {
          products.items.map((element, index) => (
              <SectionItem key={index} item={element}/>
            ))
        }
      </Styled.ListProductGrid>
      </div>
      <Styled.ListProductPaginationContainer>
        {
          pagination().map((element, index) => (
              <Link to={`/ListProducts/${props.match.params.id}/${element}`} key={index}>
                <Styled.ListProductPaginationItem>
                  {element}
                </Styled.ListProductPaginationItem>
              </Link>
          ))
        }
      </Styled.ListProductPaginationContainer>
    </Styled.ListProductsContainer>
  );
}

export default ListProducts;