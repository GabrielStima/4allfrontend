import { getProductById } from "../../services/productDetailService";

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCT_REQUEST_FAIL,
} from "./productDetailTypes";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductRequestSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_REQUEST_SUCCESS,
    payload: product,
  };
};

export const fetchProductRequestFail = (error) => {
  return {
    type: FETCH_PRODUCT_REQUEST_FAIL,
    payload: error,
  };
};

export const fetchProductById = (id) => {
  return (dispatch) => {
    dispatch(fetchProductRequest());

    try {
      const result = getProductById(id);

      if (result.length === 0) throw "Erro no serviço";

      dispatch(fetchProductRequestSuccess(result));
    } catch (error) {
      console.error(error);
      dispatch(fetchProductRequestFail(error));
    }
  };
};
