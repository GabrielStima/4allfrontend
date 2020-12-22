import { getListByCategory, getListFiltered } from '../../services/listProductsService';

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST_FAIL,
} from './listProductsTypes';

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsRequestSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_REQUEST_SUCCESS,
    payload: products,
  };
};

export const fetchProductsRequestFail = (error) => {
  return {
    type: FETCH_PRODUCTS_REQUEST_FAIL,
    payload: error,
  };
};

export const fetchProducts = (idCategory, page) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    try {
      const result = getListByCategory(idCategory, page);

      if(result.length === 0)
          throw "Erro no serviço"

      dispatch(fetchProductsRequestSuccess(result));

    } catch (error) {
        console.error(error);
        dispatch(fetchProductsRequestFail(error));
    }
  };
};

export const fetchFilterProducts = (filter, idCategory, page) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    try {
      const result = getListFiltered(filter, idCategory, page);

      if(result.length === 0)
          throw "Erro no serviço"

      dispatch(fetchProductsRequestSuccess(result));

    } catch (error) {
        console.error(error);
        dispatch(fetchProductsRequestFail(error));
    }
  };
};