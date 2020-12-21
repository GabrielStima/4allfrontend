import React, {useEffect, useState} from 'react';
import { Styled } from './styles';
import {getListByCategory, getListFiltered} from '../../services/listProductsServices';
import SectionItem from '../../components/SectionItem';
import Filter from '../../components/Filter';
import { Link, useLocation } from 'react-router-dom';

function ListProducts({props}) {
  const { pathname } = useLocation();
  const [category, setCategory] = useState({});
  const [listProducts, setListProducts] = useState([]);

  useEffect(()=>{
    let result = {};
    if(!!category.filters){
      result = getListFiltered(category.filters, props.match.params.id, props.match.params.page)
    }else{
      result = getListByCategory(props.match.params.id, props.match.params.page)
    }

    setCategory(result);
  }, [props]);

  useEffect(()=>{
    setListProducts(category.items)
  }, [category])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleListFiltered = (filter) => {
    let result = {};
    if(filter !== "0"){
      result = getListFiltered(filter, props.match.params.id, props.match.params.page)
    }else{
      result = getListByCategory(props.match.params.id, props.match.params.page)
    }
    setCategory(result);
  }

  const pagination = () => {
    let numberOfPages = category.pages; 
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
          <Styled.ListProductGridTitle>{category.title}</Styled.ListProductGridTitle>
          <Styled.ListProductGridDivider/>
        </div>

        <Styled.ListProductGrid>
        {
          !!listProducts && 
            listProducts.map((element, index) => (
              <SectionItem key={index} item={element}/>
            ))
        }
      </Styled.ListProductGrid>
      </div>
      <Styled.ListProductPaginationContainer>
        {
          pagination().map((element, index) => (
              <Link to={`/ListProducts/${props.match.params.id}/${element}/${category.filters}`} key={index}>
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